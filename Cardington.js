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
        
   }
}
