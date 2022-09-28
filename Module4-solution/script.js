(function () {

    var names = ["Esse", "Alicent", "Claire", "Chris", "Magnusen", "Kimi", "Mika", "Sicmag", "Jill", "Franz"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();