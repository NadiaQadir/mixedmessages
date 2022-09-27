let newJoke = () => {
    newJoke = '';
    let newFont = ''; 
    let x = Math.floor(Math.random()*7); 
    switch (x){
      case 0:
        newJoke = 'How does the ocean say hi? It waves!';
        newFont = 'Times New Roman'; 
        break;
      case 1: 
        newJoke = 'Why did the teddy bear say no to dessert? Because she was stuffed.';
        newFont = 'Florence, cursive'; 
        break;
      case 2:
        newJoke = 'Where did the music teacher leave her keys? In the piano!';
        newFont = 'Verdana';
        break; 
      case 3:
        newJoke = 'Why do birds fly south in the winter? It’s faster than walking!';
        newFont = 'Courier New';
        break
      case 4:
        newJoke = 'Why did the student eat his homework? Because the teacher told him it was a piece of cake.';
        newFont = 'Georgia'; 
        break;
      case 5:
          newJoke = 'What is a room with no walls? A mushroom.';
          newFont = 'Palatino';
          break;
      case 6: 
          newJoke = ' Why is a football stadium always cold? It has lots of fans!';
          newFont = 'Impact';
          break;
      case 7:
          newJoke = 'Why was 6 afraid of 7? Because 7,8,9.'
          newFont = 'Comic Sans'
          break;
    }
    var elem = document.getElementById('logo');
    elem.style.color = newColor;
    elem.style.fontFamily = newFont; 
  }
  

  //this is a similar code i would need for mixed messages.
  CLICK TO SEE YOUR FORTUNE DAILY (This could be the subject for mixed messages. after the button is clicked once could change to come back tomorrow, or we could stick to jokes and have the button change to click for a new joke)