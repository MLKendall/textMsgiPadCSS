
    $(function() {
        var textMsg = $('#textMsg').val();
        var sendButton = $('#sendButton');
        var textMsgInput = $('#textMsg');

        function addNewText() {
            $('.chat:first-child').remove();
            $('main').append(' <div class="chat chatright">' + '<div class="powderBlueGradient">' + $('#textMsg').val() + '</div> </div>');
            $('#textMsg').val("");
        }

        sendButton.on('click', addNewText);
        textMsgInput.keypress(function(event) {
            if (event.which == 13) {
                event.preventDefault();
                addNewText();
            }
        });

    });
