# -*- coding: utf-8 -*-
"""
@Time    : 2023/9/26
@Author  : luoyu
"""
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_OAEP
import base64
import binascii


class RSAUtil:
    def __init__(self, key_str: str = None, modulus: str | int = None, exponent: str | int = None):
        """
        参数样式
        :param key_str:
        第一种：
        "-----BEGIN PUBLIC KEY-----\n" \
        "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5gsH+AA4XWONB5TDcUd+xCz7ejOFHZKlcZDx+pF1i7Gsvi1vjyJoQhRtRSn950x498VUkx7rUxg1/ScBVfrRxQOZ8xFBye3pjAzfb22+RCuYApSVpJ3OO3KsEuKExftz9oFBv3ejxPlYc5yq7YiBO8XlTnQN0Sa4R4qhPO3I2MQIDAQAB\n" \
        "-----END PUBLIC KEY-----"
        第二种：
        'MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5gsH+AA4XWONB5TDcUd+xCz7ejOFHZKlcZDx+pF1i7Gsvi1vjyJoQhRtRSn950x498VUkx7rUxg1/ScBVfrRxQOZ8xFBye3pjAzfb22+RCuYApSVpJ3OO3KsEuKExftz9oFBv3ejxPlYc5yq7YiBO8XlTnQN0Sa4R4qhPO3I2MQIDAQAB'

        :param modulus:
        第一种（str类型）：
        '00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81'
        第二种（int类型）：
        136153462421446847404340432441046996374735571025589056967906613334049032306309642600950180794472974184474850029075084679952125029724775675860862428869529368335136951744118770626613042094193316007621445630035543273179259178158896311604233203144417656446177150555868699549873157540592293125574640692009097735041

        :param exponent:
        第一种（str类型）：
        "010001"
        第二种（int类型）：
        65537
        """
        if key_str and "-----" in key_str:
            key_str = key_str.replace("\n", "").replace(" ", "").split("-----")
            key_str = [x for x in key_str if len(x) > 25][0]
            key_bytes = base64.b64decode(key_str)
            public_key = RSA.importKey(key_bytes)
        elif key_str:
            key_bytes = base64.b64decode(key_str)
            public_key = RSA.importKey(key_bytes)
        elif modulus and exponent:
            if isinstance(modulus, str) and isinstance(exponent, str):
                modulus = int(modulus, 16)
                exponent = int(exponent, 16)
            public_key = RSA.construct((modulus, exponent))
        else:
            raise Exception("搞什么，给的key不合符类型啊~")
        self.bits_len = int(public_key.size_in_bits() / 1024 * 100)
        self.cipher = PKCS1_OAEP.new(public_key)

    def __encrypt(self, plaintext: str) -> bytes:
        # 这里采用分段加密，防止明文太长
        ciphertext = b""
        for i in range(0, len(plaintext), self.bits_len):
            ciphertext += self.cipher.encrypt(plaintext[i: i + self.bits_len].encode())
        return ciphertext

    def encrypt_toString(self, plaintext: str) -> str:
        # 一般来说，都报错，因为不能保证你的结果就一定能转成str
        return self.__encrypt(plaintext).decode('utf-8')

    def encrypt_toBase64(self, plaintext: str) -> str:
        return base64.b64encode(self.__encrypt(plaintext)).decode('utf-8')

    def encrypt_toHexStr(self, plaintext: str) -> str:
        return binascii.b2a_hex(self.__encrypt(plaintext)).decode('utf-8')

    def encrypt_toBytes(self, plaintext: str) -> bytes:
        return self.__encrypt(plaintext)


if __name__ == '__main__':
    # 使用示例
    plaintext = "Spider 乾坤！"

    public_key_str = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAok58IrYXjeFjb6hPgrcvKis43ARDVIqowS2AJKivDp4+8uKDCWnjzBZTsuVvwKPzvVCxBzON2/DPpHU3wnRtdKSVzWju7HMKhuLxe04FsVw8+xvZTmguBj4jTczNLSLjK13lQr46J8j7JrmVUlPqGxIL/Bd3HNAIFuarZQkDsgx5fvdNrMbmT4edr1b3A8wRkhfo9tuE5Tmlx0YVUwybzcI6hgLggCfNwwaClXyBt08NbGSIBcKYKjiQErND0EOnWcGyto7EhkpgGRfAeESo3hbmsiabThLd4t9iOWVHFSl+7B0q+1IGFjSo9qkvNdMUI4ZYdIKq+nCHufpuFMl7SwIDAQAB"
    # public_key_str = "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC5gsH+AA4XWONB5TDcUd+xCz7ejOFHZKlcZDx+pF1i7Gsvi1vjyJoQhRtRSn950x498VUkx7rUxg1/ScBVfrRxQOZ8xFBye3pjAzfb22+RCuYApSVpJ3OO3KsEuKExftz9oFBv3ejxPlYc5yq7YiBO8XlTnQN0Sa4R4qhPO3I2MQIDAQAB\n-----END PUBLIC KEY-----"
    # public_key_str = """
    # -----BEGIN PUBLIC KEY-----
    # MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAxswpnvTGXHaDHawDl6Vs
    # wYeL3Y05jFB8JWpVSFqk6XzElvKOByeDx1CQ0J4T3L1wb3O35KkSb+37+cBFB0vj
    # E510/gQg3n1DLYGy2QYa7rJ5e0sCyHZZBL1f8cN5Ei1PemOCeEk8uKHUe50AEBpf
    # 4GsJMSJ2QdZ7Wn46hjex9J/nVi/OPgsLUwzL6Ty92kV/96dWypHxRqBqXsY1WOeZ
    # S6nIObKv+5/6nDoatEe5R8L0W7iCAwJbrCP4BsD/CAig0vlk12e0u+CRPJzg11KL
    # kIGFCTIY3SgLyAg8RYaP6WQkDrKBCdLqQITvo3KShA+UZM0ftToVqObCG7dspSW/
    # CIiwq/RXX9D/PJkvFJjMrpC18yTUZFE0cjVmYh9fr8E3BZZFtgo1/Aoi62QCnK8F
    # vpv8hEN4b4m5pyM6WsXDZCmT1EPzCYJgYIaZHNC0eb9YVE3Wh/GAw7JhAsZXF4Ex
    # xkH2E1Hm13ae7xoF8ly4h1nsVi8+E80GyIvTHo3+mDD7qZOetQyxV5jG1fhFk+tD
    # uf7Jp4Ruu6YOmDT3jW8uSsLIMz9NiB7zunxj+nZU6a6GSgIdyE6gLKXhFQzA0M3d
    # kMjNflT2vUnrHocJl9v3EgJKJ/InY0qjFYCfQ2EZKHGwqDw2u0i/NBRzPlbcSClx
    # ekX0cxtzTKuVLhoMYrSrVNMCAwEAAQ==
    # -----END PUBLIC KEY-----
    # """
    rsa = RSAUtil(key_str=public_key_str)
    #
    # e = "010001"
    # m = '00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81'
    # rsa = RSAUtil(modulus=m, exponent=e)

    # e = 65537
    # m = 136153462421446847404340432441046996374735571025589056967906613334049032306309642600950180794472974184474850029075084679952125029724775675860862428869529368335136951744118770626613042094193316007621445630035543273179259178158896311604233203144417656446177150555868699549873157540592293125574640692009097735041
    # rsa = RSAUtil(modulus=m, exponent=e)

    # 加密
    encrypted_text = rsa.encrypt_toBase64(plaintext)
    # encrypted_text = rsa.encrypt_toHexStr(plaintext)
    # encrypted_text = rsa.encrypt_toString(plaintext)
    # encrypted_text = rsa.encrypt_toBytes(plaintext)
    print("加密结果:", encrypted_text)
