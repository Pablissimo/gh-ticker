(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['gh-CommitCommentEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<span class=\"action\">Commented on <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.comment)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">commit "
    + escapeExpression((helper = helpers.commitIdShort || (depth0 && depth0.commitIdShort),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.comment)),stack1 == null || stack1 === false ? stack1 : stack1.commit_id), options) : helperMissing.call(depth0, "commitIdShort", ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.comment)),stack1 == null || stack1 === false ? stack1 : stack1.commit_id), options)))
    + "</a> at <a href=\""
    + escapeExpression((helper = helpers.repoUrl || (depth0 && depth0.repoUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "repoUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n<span class=\"comment\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.comment)),stack1 == null || stack1 === false ? stack1 : stack1.body)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>";
  return buffer;
  });
Handlebars.partials['gh-CreateEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    <span class=\"action\">Created repository <a href=\""
    + escapeExpression((helper = helpers.repoUrl || (depth0 && depth0.repoUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "repoUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n    ";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.description), {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n    <span class=\"comment\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n    ";
  return buffer;
  }

function program4(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n<span class=\"action\">Created branch <a href=\""
    + escapeExpression((helper = helpers.branchUrl || (depth0 && depth0.branchUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref), options) : helperMissing.call(depth0, "branchUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> at <a href=\""
    + escapeExpression((helper = helpers.repoUrl || (depth0 && depth0.repoUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "repoUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n";
  return buffer;
  }

function program6(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n<span class=\"action\">Created tag <a href=\""
    + escapeExpression((helper = helpers.tagUrl || (depth0 && depth0.tagUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref), options) : helperMissing.call(depth0, "tagUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> at <a href=\""
    + escapeExpression((helper = helpers.repoUrl || (depth0 && depth0.repoUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "repoUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n";
  return buffer;
  }

  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref_type), "repository", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref_type), "repository", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref_type), "branch", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref_type), "branch", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref_type), "tag", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref_type), "tag", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
Handlebars.partials['gh-DeleteEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n<span class=\"action\">Deleted branch "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " at <a href=\""
    + escapeExpression((helper = helpers.repoUrl || (depth0 && depth0.repoUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "repoUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n<span class=\"action\">Deleted tag "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " at <a href=\""
    + escapeExpression((helper = helpers.repoUrl || (depth0 && depth0.repoUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "repoUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n";
  return buffer;
  }

  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref_type), "branch", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref_type), "branch", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n\r\n";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref_type), "tag", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.ref_type), "tag", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
Handlebars.partials['gh-DownloadEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<span class=\"comment\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.download)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

  buffer += "<span class=\"action\">Created new download <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.download)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.download)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> for <a href=\""
    + escapeExpression((helper = helpers.repoUrl || (depth0 && depth0.repoUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "repoUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.download)),stack1 == null || stack1 === false ? stack1 : stack1.description), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
Handlebars.partials['gh-FollowEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.target)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.target)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ("
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.target)),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ")</a>\r\n  ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n  <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.target)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.target)),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n  ";
  return buffer;
  }

function program5(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<span class=\"comment\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.target)),stack1 == null || stack1 === false ? stack1 : stack1.bio)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

  buffer += "<span class=\"action\">\r\n  Followed\r\n  ";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.target)),stack1 == null || stack1 === false ? stack1 : stack1.name), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</span>\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.target)),stack1 == null || stack1 === false ? stack1 : stack1.bio), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
Handlebars.partials['gh-ForkApplyEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<span class=\"action\">Applied fork commits to <a href=\""
    + escapeExpression((helper = helpers.repoUrl || (depth0 && depth0.repoUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "repoUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>";
  return buffer;
  });
Handlebars.partials['gh-ForkEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<span class=\"comment\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.forkee)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

  buffer += "<span class=\"action\">Forked repository <a href=\""
    + escapeExpression((helper = helpers.repoUrl || (depth0 && depth0.repoUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "repoUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> to <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.forkee)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.forkee)),stack1 == null || stack1 === false ? stack1 : stack1.full_name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.forkee)),stack1 == null || stack1 === false ? stack1 : stack1.description), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
Handlebars.partials['gh-GistEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<span class=\"comment\">\r\n"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.gist)),stack1 == null || stack1 === false ? stack1 : stack1.description)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\r\n</span>\r\n";
  return buffer;
  }

  buffer += "<span class=\"action\">"
    + escapeExpression((helper = helpers.capitalise || (depth0 && depth0.capitalise),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.action), options) : helperMissing.call(depth0, "capitalise", ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.action), options)))
    + "d gist <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.gist)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.gist)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.gist)),stack1 == null || stack1 === false ? stack1 : stack1.description), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
Handlebars.partials['gh-GollumEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<span class=\"action\">Updated "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.pages)),stack1 == null || stack1 === false ? stack1 : stack1.length)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression((helper = helpers.pluralise || (depth0 && depth0.pluralise),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.pages)),stack1 == null || stack1 === false ? stack1 : stack1.length), "page", "pages", options) : helperMissing.call(depth0, "pluralise", ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.pages)),stack1 == null || stack1 === false ? stack1 : stack1.length), "page", "pages", options)))
    + " on the <a href=\""
    + escapeExpression((helper = helpers.wikiUrl || (depth0 && depth0.wikiUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "wikiUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " wiki</a></span>";
  return buffer;
  });
Handlebars.partials['gh-IssueCommentEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<span class=\"action\">Commented on <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.issue)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">issue "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "#"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.issue)),stack1 == null || stack1 === false ? stack1 : stack1.number)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> - "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.issue)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n<span class=\"comment\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.comment)),stack1 == null || stack1 === false ? stack1 : stack1.body)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>";
  return buffer;
  });
Handlebars.partials['gh-IssuesEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<span class=\"action\">"
    + escapeExpression((helper = helpers.capitalise || (depth0 && depth0.capitalise),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.action), options) : helperMissing.call(depth0, "capitalise", ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.action), options)))
    + " <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.issue)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">issue "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "#"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.issue)),stack1 == null || stack1 === false ? stack1 : stack1.number)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n<span class=\"comment\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.issue)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>";
  return buffer;
  });
Handlebars.partials['gh-MemberEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<span class=\"action\">Made <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.member)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.member)),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\na contributor to <a href=\""
    + escapeExpression((helper = helpers.repoUrl || (depth0 && depth0.repoUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "repoUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>";
  return buffer;
  });
Handlebars.partials['gh-PublicEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<span class=\"action\">Made <a href=\""
    + escapeExpression((helper = helpers.repoUrl || (depth0 && depth0.repoUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "repoUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a> a public repository</span>";
  return buffer;
  });
Handlebars.partials['gh-PullRequestEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  
  return "Opened";
  }

function program3(depth0,data) {
  
  
  return "Closed";
  }

function program5(depth0,data) {
  
  
  return "Synchronised";
  }

function program7(depth0,data) {
  
  
  return "Re-opened";
  }

function program9(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<span class=\"comment\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.pull_request)),stack1 == null || stack1 === false ? stack1 : stack1.body)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

  buffer += "<span class=\"action\">\r\n    ";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.action), "opened", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.action), "opened", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.action), "closed", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.action), "closed", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.action), "synchronize", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.action), "synchronize", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    ";
  stack1 = (helper = helpers.ifeq || (depth0 && depth0.ifeq),options={hash:{},inverse:self.noop,fn:self.program(7, program7, data),data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.action), "reopened", options) : helperMissing.call(depth0, "ifeq", ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.action), "reopened", options));
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    &nbsp;a <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.pull_request)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">pull request</a> to <a href=\""
    + escapeExpression((helper = helpers.repoUrl || (depth0 && depth0.repoUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "repoUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n</span>\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.pull_request)),stack1 == null || stack1 === false ? stack1 : stack1.body), {hash:{},inverse:self.noop,fn:self.program(9, program9, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
Handlebars.partials['gh-PullRequestReviewCommentEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing;


  buffer += "<span class=\"action\">Commented on a <a href=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.comment)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">pull request</a> to <a href=\""
    + escapeExpression((helper = helpers.repoUrl || (depth0 && depth0.repoUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "repoUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n<span class=\"comment\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.comment)),stack1 == null || stack1 === false ? stack1 : stack1.body)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>";
  return buffer;
  });
Handlebars.partials['gh-PushEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<span class=\"comment\">"
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.commits)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.message)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

  buffer += "<span class=\"action\">\r\n    Pushed "
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.size)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression((helper = helpers.pluralise || (depth0 && depth0.pluralise),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.size), "commit", "commits", options) : helperMissing.call(depth0, "pluralise", ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.size), "commit", "commits", options)))
    + " to <a href=\""
    + escapeExpression((helper = helpers.repoUrl || (depth0 && depth0.repoUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "repoUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a>\r\n</span>\r\n\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.commits)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.message), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
Handlebars.partials['gh-ReleaseEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\r\n<span class=\"comment\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.body)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</span>\r\n";
  return buffer;
  }

  buffer += "<span class=\"action\">Created a new release for <a href=\""
    + escapeExpression((helper = helpers.repoUrl || (depth0 && depth0.repoUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "repoUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>\r\n";
  stack1 = helpers['if'].call(depth0, ((stack1 = (depth0 && depth0.payload)),stack1 == null || stack1 === false ? stack1 : stack1.body), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  return buffer;
  });
Handlebars.partials['gh-WatchEvent'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, functionType="function";


  buffer += "<span class=\"action\">Starred <a href=\""
    + escapeExpression((helper = helpers.repoUrl || (depth0 && depth0.repoUrl),options={hash:{},data:data},helper ? helper.call(depth0, ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options) : helperMissing.call(depth0, "repoUrl", ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name), options)))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.repo)),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></span>";
  return buffer;
  });
Handlebars.partials['gh'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1, helper, options;
  buffer += "\r\n    <li id=\"gh-ticker-item-"
    + escapeExpression(((stack1 = (data == null || data === false ? data : data.index)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">\r\n        "
    + escapeExpression((helper = helpers.partialFor || (depth0 && depth0.partialFor),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.type), options) : helperMissing.call(depth0, "partialFor", (depth0 && depth0.type), options)))
    + "\r\n        <div class=\"dateline\">"
    + escapeExpression((helper = helpers.dateAndTime || (depth0 && depth0.dateAndTime),options={hash:{},data:data},helper ? helper.call(depth0, (depth0 && depth0.created_at), options) : helperMissing.call(depth0, "dateAndTime", (depth0 && depth0.created_at), options)))
    + "</div>\r\n    </li>\r\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  
  return "\r\n    <li>\r\n        No recent GitHub activity\r\n    </li>\r\n    ";
  }

  buffer += "<ul>\r\n    ";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.items), {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n</ul>";
  return buffer;
  });
})();
