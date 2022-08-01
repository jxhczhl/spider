const fs = require("fs");//文件读写
const parse = require("@babel/parser"); //解析为ast
const traverse = require('@babel/traverse').default;//遍历节点
const types = require('@babel/types');
const parser = require("@babel/parser");
//类型
const generator = require('@babel/generator').default;//ast解析为代码

let jscode = fs.readFileSync(
    './demo.js', {
        encoding: 'utf-8'
    }
);

let ast = parse.parse(jscode);//js转ast


let visitorArray = {
    "VariableDeclarator"(path) {
        let {id, init} = path.node;
        if (!init || init.type !== "ArrayExpression" || init.elements.length < 1) return;
        let binding = path.scope.getBinding(id.name);
        if (binding.references === 0) {
            path.remove;
            return
        }
        if (init.elements.every(element => element.type === "StringLiteral")) {
            //获取父级函数，如果没有就说明是最外层定义的数组
            let funcName = path.getFunctionParent();
            if (funcName === null) {
                console.log("大数组名字应该是：", id.name)
                global["largeArrayName"]= id.name;
                global["largeArray"] = path.toString();
                path.remove;
                // 父级作用域传给另外一个函数操作
                //getDecName(path.parentPath)
            } 

        }

    },
}


traverse(ast, visitorArray);
eval(global["largeArray"])


let Replacement={
    "MemberExpression"(path){
        let {node}=path;
        if(!node.object&&node.object.type!=="Identifier")return;
        if(node.object.name!==global["largeArrayName"])return;
        if(!node.property&&node.property.type!=="NumericLiteral")return;
        //console.log(node.property.value);
        let value = node.property.value;

        path.replaceWith(types.valueToNode(eval(global["largeArrayName"])[value]));
        

    }
}

traverse(ast, Replacement);

let {code} = generator(ast, opts = {
    //compact: true,
    //jsescOption: {minified: true, retainFunctionParens: true, retainLines: true}
})
fs.writeFile('./demoNew.js', code, (err) => {
});