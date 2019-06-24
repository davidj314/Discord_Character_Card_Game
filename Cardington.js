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
   
   finish_game: async function (board, callback){
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

   },
   
   resolve_fights: async function (card, row, col, positions, narrate, post){
	var t_card = card;
	var cards = [[row, col, t_card]];
	var next_cards = [];
	var thiscolor = card.color;
	var color_in = [];
	var combo = 0;
	while (combo <6)
	{
		while(cards.length>0)
		{
			var thisrow = cards[0][0];
			var thiscol = cards[0][1];
			positions[thisrow][thiscol].color=thiscolor
			var above = -1;
			var below = -1;
			var left = -1;
			var right = -1;
			var updiff = -100;
			var downdiff = -100;
			var leftdiff = -100;
			var rightdiff = -100;
			if (thisrow > 0) above = {color: positions[thisrow-1][thiscol].color, val:positions[thisrow-1][thiscol].down} ;
			if (thisrow < 2) below = {color: positions[thisrow+1][thiscol].color, val:positions[thisrow+1][thiscol].up};
			if (thiscol > 0) left = {color: positions[thisrow][thiscol-1].color, val:positions[thisrow][thiscol-1].right};
			if (thiscol < 2) right = {color: positions[thisrow][thiscol+1].color, val:positions[thisrow][thiscol+1].left};

			if (above!=-1){
				updiff = above.val + cards[0][2].up;
				if (cards[0][2].up > above.val&& above.color!=thiscolor){
					color_in.push([thisrow-1, thiscol]);
					if (combo>0){
						next_cards.push([thisrow-1, thiscol, positions[thisrow-1][thiscol]]);
						narrate('COMBO!!');
					}
				}
				
			}
			if (below!=-1){
				downdiff = below.val + cards[0][2].down;
				if (cards[0][2].down > below.val&& below.color!=thiscolor){
					color_in.push([thisrow+1, thiscol]);
					if (combo>0){
						next_cards.push([thisrow+1, thiscol, positions[thisrow+1][thiscol]]);
						narrate('COMBO!!');
					}
				}
			}
			if (left!=-1){
				leftdiff = left.val + cards[0][2].left;
				if (cards[0][2].left > left.val&& left.color!=thiscolor){
					color_in.push([thisrow, thiscol-1]);
					if (combo>0){
						next_cards.push([thisrow, thiscol-1, positions[thisrow][thiscol-1]]);
						narrate('COMBO!!');
					}
				}
			}
			if (right!=-1){
				rightdiff = right.val + cards[0][2].right;
				if (cards[0][2].right > right.val&& right.color!=thiscolor){
					color_in.push([thisrow, thiscol+1]);
					if (combo>0){
						next_cards.push([thisrow, thiscol+1, positions[thisrow][thiscol+1]]);
						narrate('COMBO!!');
					}
				}
			}

			if (combo == 0){
				var looked_at = [];
				var plus_match = [];
				if (updiff > -100 ){
					if (!looked_at.includes(updiff))looked_at.push(updiff); //if never looked at, put it in
					else if (!plus_match.includes(updiff))plus_match.push(updiff); //been looked at before, add if new 
					console.log(`For ${thisrow} ${thiscol} Updiff is ${updiff}`);
				}
				if (downdiff > -100 ){
					if (!looked_at.includes(downdiff))looked_at.push(downdiff);
					else if (!plus_match.includes(downdiff))plus_match.push(downdiff);
					console.log(`For ${thisrow} ${thiscol} downdiff is ${downdiff}`);
				}
				if (leftdiff > -100 ){
					if (!looked_at.includes(leftdiff))looked_at.push(leftdiff);
					else if (!plus_match.includes(leftdiff))plus_match.push(leftdiff);	
					console.log(`For ${thisrow} ${thiscol} leftdiff is ${leftdiff}`);
				}
				if (rightdiff > -100 ){
					if (!looked_at.includes(rightdiff))looked_at.push(rightdiff);
					else if (!plus_match.includes(rightdiff))plus_match.push(rightdiff);	
					console.log(`For ${thisrow} ${thiscol} rightdiff is ${rightdiff}`);
				}
				if (plus_match.length>0)narrate('PLUS effect!!');
				plus_match.forEach(function(plus) {
				if (updiff == plus && positions[thisrow-1][thiscol].color!= thiscolor)
					if(!next_cards.includes([thisrow-1, thiscol, positions[thisrow-1][thiscol]])){
						color_in.push([thisrow-1, thiscol]);
						next_cards.push([thisrow-1, thiscol, positions[thisrow-1][thiscol]]);
						console.log(`card ${thisrow-1} ${thiscol} being plus-taken`);
					}
				if (downdiff == plus && positions[thisrow+1][thiscol].color!= thiscolor) 
					if(!next_cards.includes([thisrow+1, thiscol, positions[thisrow+1][thiscol]])){
						color_in.push([thisrow+1, thiscol]);
						next_cards.push([thisrow+1, thiscol, positions[thisrow+1][thiscol]]);
						console.log(`card ${thisrow+1} ${thiscol} being plus-taken`);
					}
				if (leftdiff == plus && positions[thisrow][thiscol-1].color!= thiscolor) 
					if(!next_cards.includes([thisrow, thiscol-1, positions[thisrow][thiscol-1]])){
						color_in.push([thisrow, thiscol-1]);
						next_cards.push([thisrow, thiscol-1, positions[thisrow][thiscol-1]]);
						console.log(`card ${thisrow} ${thiscol-1} being plus-taken`);
					}
				if (rightdiff == plus && positions[thisrow][thiscol+1].color!= thiscolor) 
					if(!next_cards.includes([thisrow, thiscol+1, positions[thisrow][thiscol+1]])){
						color_in.push([thisrow, thiscol+1]);
						next_cards.push([thisrow, thiscol+1, positions[thisrow][thiscol+1]]);	
						console.log(`card ${thisrow} ${thiscol+1} being plus-taken`);
					}
				});
			}
			cards.splice(0,1);
			
		}
		//MAYBE CHANGE NEXT_CARDS TO DEAL WITH COORDS
		cards = cards.concat(next_cards);
		next_cards=[];
		combo++;
		if(cards.length==0)combo=10;
		else await show_board(positions,  post);
	}//out of the while loop. Time to color
	
	color_in.forEach(function(cell){positions[cell[0]][cell[1]].color=thiscolor});
},
   
}



async function show_board (positions, callback){
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
   }
