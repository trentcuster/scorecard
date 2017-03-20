function players(){
    var num_players = document.getElementById('players').value;
    var num_cols = document.getElementById('cols').value;
    var theader = '<table border="1">/n';
    var tbody = '';

    for (var i = 0; i < num_players;i++)
    {
        tbody += '<tr>';
        for(var j=0; j<num_cols; j++){
            tbody += '<td>';
            tbody += 'Player' + i ;
            tbody += '</td>';
        }
        tbody += '<tr>\n';
    }
    var tfooter = '</table>';
    document.getElementById('wrapper').innerHTML = theader + tbody + tfooter;
}
