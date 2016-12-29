Blockly.Blocks['do_after'] = {
  // Print statement.
  helpUrl: Blockly.LANG_TEXT_PRINT_HELPURL,
  init: function() {
    this.setColour(100);
    this.appendValueInput("seconds")
        .setCheck("Number")
        .appendField(Blockly.Msg.AFTER);    
    this.appendDummyInput()
        .appendField(Blockly.Msg.WAIT_SECONDS);
    this.setInputsInline(true);
    this.appendStatementInput('ONTIMEOUT')
       .appendField('do');
	this.setPreviousStatement(true);
    this.setTooltip('');
  }
};

Blockly.JavaScript.do_after = function() {
  var branch = Blockly.JavaScript.statementToCode(this, 'ONTIMEOUT');
  var seconds = this.getFieldValue('seconds');
  var id = this.getFieldValue('ID') || 'Main';
  var code = 'var timer=setTimeout(function(){\n' + branch + '\n},' + seconds * 1000 + ');\n\n';
  return code;
};