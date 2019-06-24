const Canvas = require('canvas');
var Discord = require('discord.js');
module.exports = {
   hello: function() {
      console.log("did this work?");
   },
   
   show_hand: async function(hand, nick, callback){
      console.log("In show hand");
      const canvas = Canvas.createCanvas( 745, 180);
      const ctx = canvas.getContext('2d');
      ctx.strokeStyle = '#74037b';
      ctx.strokeRect(0, 0, canvas.width, canvas.height);

      const bck1 = await Canvas.loadImage('https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/blue0517.jpg?itok=V3825voJ');
      const bck2 = await Canvas.loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ScbytNAjJFFGQRhGm-Me3ad-SJZbyzYm3A2FpU4MDsaao6D-');
      console.log("Loaded images?");
      // Select the font size and type from one of the natively available fonts
      ctx.font = '20px sans-serif';
      // Select the style that will be used to fill the text in
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1; 

      for (var i = 0; i < hand.length; i++){
         //console.log("Messing with this card:");
         //console.log(hand[i]);
         var url = hand[i].url;
         if (hand[i].used == 1)continue; 
         const character = await Canvas.loadImage(url);
         if(hand[i].color == "Blue") ctx.drawImage(bck1, (0+i*148), 0, 144, 180);
         else ctx.drawImage(bck2, (0+i*148), 0, 144, 180);

         ctx.drawImage(character, (3+i*148), 3, 138, 174);
         ctx.strokeText(`  ${hand[i].up} \n${hand[i].left}  ${hand[i].right}\n  ${hand[i].down}`, (7+i*148), 22);
         ctx.fillText(`  ${hand[i].up} \n${hand[i].left}  ${hand[i].right}\n  ${hand[i].down}`,  (7+i*148), 22);
      }

      const attachment = new Discord.Attachment(canvas.toBuffer(), 'hand.png');
      callback(`${nick}'s Hand`, attachment);	
        
   },
   
   show_board: async function (positions, callback){
      const canvas = Canvas.createCanvas(396, 418);
      const ctx = canvas.getContext('2d');

      const background = await Canvas.loadImage('http://www.finalfantasykingdom.net/8/TTBOARD.jpg');
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = '#74037b';
      ctx.strokeRect(0, 0, canvas.width, canvas.height);

      const bck1 = await Canvas.loadImage('https://cdn-image.travelandleisure.com/sites/default/files/styles/1600x1000/public/blue0517.jpg?itok=V3825voJ');
      const bck2 = await Canvas.loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1ScbytNAjJFFGQRhGm-Me3ad-SJZbyzYm3A2FpU4MDsaao6D-');

      // Move the image downwards vertically and constrain its height to 200, so it's a square


      // Select the font size and type from one of the natively available fonts
      ctx.font = '20px sans-serif';
      // Select the style that will be used to fill the text in
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1; 

      if (positions[0][0]!= -1){	
         const character = await Canvas.loadImage(positions[0][0].url);
         var up = positions[0][0].up;
         var down = positions[0][0].down;
         var left = positions[0][0].left;
         var right = positions[0][0].right;
         if(positions[0][0].color=="Blue") ctx.drawImage(bck1, 54, 25, 96, 120);
         else ctx.drawImage(bck2, 54, 25, 96, 120);
         ctx.drawImage(character, 56, 27, 92, 116);
         ctx.strokeText(`  ${up} \n${left}  ${right}\n  ${down}`, 57, 40);
         ctx.fillText(`  ${up} \n${left}  ${right}\n  ${down}`, 57, 40);
      }

      //top middle	
      if (positions[0][1]!= -1){
         const character = await Canvas.loadImage(positions[0][1].url);
         var up = positions[0][1].up;
         var down = positions[0][1].down;
         var left = positions[0][1].left;
         var right = positions[0][1].right;
         if(positions[0][1].color=="Blue") ctx.drawImage(bck1, 152, 25, 96, 120);
         else ctx.drawImage(bck2, 152, 25, 96, 120)
         ctx.drawImage(character, 154, 27, 92, 116);
         ctx.strokeText(`  ${up} \n${left}  ${right}\n  ${down}`, 155, 40);
         ctx.fillText(`  ${up} \n${left}  ${right}\n  ${down}`, 155, 40);
      }	
      //top right	
      if (positions[0][2]!= -1){
         const character = await Canvas.loadImage(positions[0][2].url);
         var up = positions[0][2].up;
         var down = positions[0][2].down;
         var left = positions[0][2].left;
         var right = positions[0][2].right;
         if(positions[0][2].color=="Blue") ctx.drawImage(bck1, 250, 25, 96, 120);
         else ctx.drawImage(bck2, 250, 25, 96, 120)
         ctx.drawImage(character, 252, 27, 92, 116);
         ctx.strokeText(`  ${up} \n${left}  ${right}\n  ${down}`, 253, 40);
         ctx.fillText(`  ${up} \n${left}  ${right}\n  ${down}`, 253, 40);
      }
      //------------------
      //middle left	
      if (positions[1][0]!= -1){
         const character = await Canvas.loadImage(positions[1][0].url);
         var up = positions[1][0].up;
         var down = positions[1][0].down;
         var left = positions[1][0].left;
         var right = positions[1][0].right;
         if(positions[1][0].color=="Blue") ctx.drawImage(bck1, 54, 147, 96, 120);
         else ctx.drawImage(bck2, 54, 147, 96, 120)
         ctx.drawImage(character, 56, 149, 92, 116);
         ctx.strokeText(`  ${up} \n${left}  ${right}\n  ${down}`, 57, 162);
         ctx.fillText(`  ${up} \n${left}  ${right}\n  ${down}`, 57, 162);
      }
      //middle middle	
      if (positions[1][1]!= -1){
         const character = await Canvas.loadImage(positions[1][1].url);
         var up = positions[1][1].up;
         var down = positions[1][1].down;
         var left = positions[1][1].left;
         var right = positions[1][1].right;
         if(positions[1][1].color=="Blue") ctx.drawImage(bck1, 152, 147, 96, 120);
         else ctx.drawImage(bck2, 152, 147, 96, 120)
         ctx.drawImage(character, 154, 149, 92, 116);
         ctx.strokeText(`  ${up} \n${left}  ${right}\n  ${down}`, 155, 162);
         ctx.fillText(`  ${up} \n${left}  ${right}\n  ${down}`, 155, 162);
      }
      //middle right	
      if (positions[1][2]!= -1){
         const character = await Canvas.loadImage(positions[1][2].url);
         var up = positions[1][2].up;
         var down = positions[1][2].down;
         var left = positions[1][2].left;
         var right = positions[1][2].right;
         if(positions[1][2].color=="Blue") ctx.drawImage(bck1, 250, 147, 96, 120);
         else ctx.drawImage(bck2, 250, 147, 96, 120)
         ctx.drawImage(character, 252, 149, 92, 116);
         ctx.strokeText(`  ${up} \n${left}  ${right}\n  ${down}`, 253, 162);
         ctx.fillText(`  ${up} \n${left}  ${right}\n  ${down}`, 253, 162);
      }
      //----------------------

      //bottom left	
      if (positions[2][0]!= -1){
         const character = await Canvas.loadImage(positions[2][0].url);
         var up = positions[2][0].up;
         var down = positions[2][0].down;
         var left = positions[2][0].left;
         var right = positions[2][0].right;
         if(positions[2][0].color=="Blue") ctx.drawImage(bck1, 54, 269, 96, 120);
         else ctx.drawImage(bck2, 54, 269, 96, 120)
         ctx.drawImage(character, 56, 271, 92, 116);
         ctx.strokeText(`  ${up} \n${left}  ${right}\n  ${down}`, 57, 284);
         ctx.fillText(`  ${up} \n${left}  ${right}\n  ${down}`, 57, 284);
      }
      //bottom middle	
      if (positions[2][1]!= -1){
         const character = await Canvas.loadImage(positions[2][1].url);
         var up = positions[2][1].up;
         var down = positions[2][1].down;
         var left = positions[2][1].left;
         var right = positions[2][1].right;
         if(positions[2][1].color=="Blue") ctx.drawImage(bck1, 152, 269, 96, 120);
         else ctx.drawImage(bck2, 152, 269, 96, 120)
         ctx.drawImage(character, 154, 271, 92, 116);
         ctx.strokeText(`  ${up} \n${left}  ${right}\n  ${down}`, 155, 284);
         ctx.fillText(`  ${up} \n${left}  ${right}\n  ${down}`, 155, 284);
      }
      //bottom right	
      if (positions[2][2]!= -1){
         const character = await Canvas.loadImage(positions[2][2].url);
         var up = positions[2][2].up;
         var down = positions[2][2].down;
         var left = positions[2][2].left;
         var right = positions[2][2].right;
         if(positions[2][2].color=="Blue") ctx.drawImage(bck1, 250, 269, 96, 120);
         else ctx.drawImage(bck2, 250, 269, 96, 120)
         ctx.drawImage(character, 252, 271, 92, 116);
         ctx.strokeText(`  ${up} \n${left}  ${right}\n  ${down}`, 253, 284);
         ctx.fillText(`  ${up} \n${left}  ${right}\n  ${down}`, 253, 284);
      }


      const attachment = new Discord.Attachment(canvas.toBuffer(), 'board.png');
      callback(`Triple Triad`, attachment);
   },
   
   finish_board: async function finish_game(board, callback){
      var initiator_points = 1;
      var challenged_points = 0; 

      if (board.positions[0][0].color == "Blue") initiator_points++;
      else challenged_points++;
      if (board.positions[0][1].color == "Blue") initiator_points++;
      else challenged_points++;
      if (board.positions[0][2].color == "Blue") initiator_points++;
      else challenged_points++;
      if (board.positions[1][0].color == "Blue") initiator_points++;
      else challenged_points++;
      if (board.positions[1][1].color == "Blue") initiator_points++;
      else challenged_points++;
      if (board.positions[1][2].color == "Blue") initiator_points++;
      else challenged_points++;
      if (board.positions[2][0].color == "Blue") initiator_points++;
      else challenged_points++;
      if (board.positions[2][1].color == "Blue") initiator_points++;
      else challenged_points++;
      if (board.positions[2][2].color == "Blue") initiator_points++;
      else challenged_points++;

      //initiator_nick: p1nick, challenged_nick:
      var finish_text = `\nGame Finished \n ${board.initiator_nick}'s Points: ${initiator_points} \n ${board.challenged_nick}'s Points: ${challenged_points}`;
      if (initiator_points > challenged_points) finish_text += `\n${board.initiator_nick} is the winner!`
      else if (challenged_points > initiator_points) finish_text += `\n${board.challenged_nick} is the winner!`
      else finish_text += `\nIt's a draw!`

      const canvas = Canvas.createCanvas( 396, 180);
      const ctx = canvas.getContext('2d');
      ctx.strokeStyle = '#74037b';
      ctx.strokeRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#000000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Select the font size and type from one of the natively available fonts
      ctx.font = '20px sans-serif';
      // Select the style that will be used to fill the text in
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 1; 
      ctx.strokeText(finish_text, 0, 0);
      ctx.fillText(finish_text, 0, 0);

      const attachment = new Discord.Attachment(canvas.toBuffer(), 'hand.png');
      callback(`The end`, attachment);	

   }
   
}
