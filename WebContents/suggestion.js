function AutoSuggestControl(oTextbox, oProvider) {
    this.layer = null;
    this.provider = oProvider;
    this.textbox = oTextbox;
    this.init();
    this.selectRange = function (iStart, iLength) {
        if (this.textbox.createTextRange) {
            var oRange = this.textbox.createTextRange(); 
            oRange.moveStart("character", iStart); 
            oRange.moveEnd("character", iLength - this.textbox.value.length); 
            oRange.select();
        } else if (this.textbox.setSelectionRange) {
            this.textbox.setSelectionRange(iStart, iLength);
        }
        this.textbox.focus(); 
    };

    this.typeAhead = function (sSuggestion) {
        if (this.textbox.createTextRange || this.textbox.setSelectionRange) {
            var iLen = this.textbox.value.length; 
            this.textbox.value = sSuggestion; 
            this.selectRange(iLen, sSuggestion.length);
        }
    };

    this.autosuggest = function (aSuggestions) {
        if (aSuggestions.length > 0) {
            this.typeAhead(aSuggestions[0]);
        }
    };

    this.handleKeyUp = function (oEvent) {
        var iKeyCode = oEvent.keyCode;
        if (iKeyCode < 32 || (iKeyCode >= 33 && iKeyCode <= 46) || (iKeyCode >= 112 && iKeyCode <= 123)) {
            //ignore
        } else {
            this.sProvider.getSuggestions(this);
        }
    };

    this.hideSuggestions = function () {
        this.layer.style.visibility = "hidden";
    };

    this.highlightSuggestion = function (currentlySelected) {
        for(var i = 0; i < this.layer.childNodes.length; i++){
            var option = this.layer.childNodes[i];
            if(option == currentlySelected)
                option.className = "current";
            else if(option.className == "current")
                option.className = "";
        }
    };

    this.createDropDown = function(){
        this.layer = document.createElement("div");
        this.layer.className = "suggestions";
        this.layer.style.visibility = "hidden";
        this.layer.style.width = this.textbox.offsetWidth;
        document.body.appendChild(this.layer);

        var asControl = this;

        this.layer.onmousedown = this.layer.onmouseup =
        this.layer.onmouseover = function(event){
            event = event || window.event;
            target = event.target || event.srcElement;
            if(event.type == "mousedown"){
                asControl.textbox.value = target.firstChild.nodeValue;
                asControl.hideSuggestions();
            } else if (event.type == "mouseover"){
                
            }
        };
    };
}
AutoSuggestControl.prototype.init = function () {
    var oThis = this;
    this.textbox.onkeyup = function (oEvent) {
        if (!oEvent) {
            oEvent = window.event;
        }
        oThis.handleKeyUp(oEvent);
    };
};

//--------------------------------------------------------------------------------------------------------

function SuggestionProvider() {
    //any initializations needed go here
}

StateSuggestions.prototype.requestSuggestions = function (oAutoSuggestControl) {
    var aSuggestions = [];
    var sTextboxValue = oAutoSuggestControl.textbox.value;

    if (sTextboxValue.length > 0){
        for (var i=0; i < this.states.length; i++) { 
            if (this.states[i].indexOf(sTextboxValue) == 0) {
                aSuggestions.push(this.states[i]);
            } 
        } 
        oAutoSuggestControl.autosuggest(aSuggestions);
    } 
};

//--------------------------------------------------------------------------------------------------------
function StateSuggestions() {
    this.states = [];
}
StateSuggestions.prototype.requestSuggestions = function (oAutoSuggestControl) {
    var aSuggestions = [];
    var sTextboxValue = oAutoSuggestControl.textbox.value;

    if (sTextboxValue.length > 0){
        for (var i=0; i < this.states.length; i++) { 
            if (this.states[i].indexOf(sTextboxValue) == 0) {
                aSuggestions.push(this.states[i]);
            } 
        } 
        oAutoSuggestControl.autosuggest(aSuggestions);
    } 
};