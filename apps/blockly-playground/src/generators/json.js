import * as Blockly from "blockly";
export const jsonGenerator = new Blockly.CodeGenerator("JSON");

const Order = {
  ATOMIC: 0,
};

jsonGenerator.forBlock["logic_null"] = function (block, generator) {
  return ["null", Order.ATOMIC];
};

jsonGenerator.forBlock["text"] = function (block, generator) {
  const textValue = block.getFieldValue("TEXT");
  return [`"${textValue}"`, Order.ATOMIC];
};

jsonGenerator.forBlock["math_number"] = function (block, generator) {
  const code = String(block.getFieldValue("NUM"));
  return [code, Order.ATOMIC];
};

jsonGenerator.forBlock["logic_boolean"] = function (block, generator) {
  const code =
    String(block.getFieldValue("BOOL")) === "TRUE" ? "true" : "false";
  return [code, Order.ATOMIC];
};

jsonGenerator.forBlock["member"] = function (block, generator) {
  const name = block.getFieldValue("MEMBER_NAME");
  const value = generator.valueToCode(block, "MEMBER_VALUE", Order.ATOMIC);
  return `"${name}": ${value || '""'}`;
};

jsonGenerator.forBlock["lists_create_with"] = function (block, generator) {
  const values = [];
  for (let i = 0; i < block.itemCount_; i++) {
    const valueCode = generator.valueToCode(block, "ADD" + i, Order.ATOMIC);
    if (valueCode) {
      values.push(valueCode);
    }
  }
  const valueString = values.join(",\n");
  const indentedValueString =
    values.length > 1
      ? generator.prefixLines(valueString, generator.INDENT)
      : valueString;
  console.log(`"${values.length}"`);
  let code;
  if (indentedValueString.trim()) {
    code =
      values.length > 1
        ? `[\n${indentedValueString}\n]`
        : `[${indentedValueString}]`;
  } else {
    code = "[]";
  }
  return [code, Order.ATOMIC];
};

jsonGenerator.forBlock["object"] = function (block, generator) {
  const statementMembers = generator.statementToCode(block, "MEMBERS");
  const code = statementMembers ? `{\n${statementMembers}\n}` : "{}";
  return [code, Order.ATOMIC];
};

jsonGenerator.scrub_ = function (block, code, thisOnly) {
  const nextBlock = block.nextConnection && block.nextConnection.targetBlock();
  if (nextBlock && !thisOnly) {
    return code + ",\n" + jsonGenerator.blockToCode(nextBlock);
  }
  return code;
};
