Blockly.Blocks['wait'] = {
  init: function() {
    this.appendValueInput("seconds")
        .setCheck("Number")
        .appendField("wait");
    this.appendDummyInput()
        .appendField("Seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.JavaScript['wait'] = function(block) {
  var seconds = Blockly.JavaScript.valueToCode(block, 'seconds', Blockly.JavaScript.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = "var t=new Date().getTime()+" + seconds * 1000+";while(new Date()<t);\n"
  return code;
};