window.onload = function()
{	
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var clavier = new Clavier();
    var pltf = new Image();
    var gameover = new Image();
    var pospltf = 80;
    var sens = 1;
    var plonger = new Image();
    var colequip = false;
    var equipement = false;
    var y=1;
    var z=1;
    var coldroite = false;
    var colgauche = false;
    var perso = new Image();
    var youwin = new Image();
    var fond1 = new Image();
    var fond2 = new Image();
    var fond3 = new Image();
    var posX = 0;
    var posY = 0;
    var pas = 0;
    var dir = 11;
    var compteur = 0;
    var coll = false;
    var posInit = 0;
    var saut = false;
    var win = false;
    var niveau = 1;
    var temps = 0;
    var changement = false;
    var trounoir = new Image();
    var pltf3 = new Image();
    var rouge = new Image();
    var vert = new Image();
    var cosmo = new Image();
    var open = new Image();
    var close = new Image();
    var coll = false;
    var porteouverte = false; 
    var s = 1;
    var colltrounoir = false;
    var theta = 0;
    var aste = new Image();
    var a = 1;
    var over = false;
    
    
    // Chargement des images global
    
        fond1.src = 'Images/fonddepart.png';    
        fond2.src = 'Images/fondmer.png';
        fond3.src = 'Images/espace.png';
        perso.src = 'Images/sprite.png';
        youwin.src = 'Images/youwin.png';
        gameover.src ='Images/gameover.png';
 
   // Chargement des images niveau 2
    
        pltf.src = 'Images/plateforme.png';
        plonger.src ='Images/plonger.png';
    
    //Chargement des images niveau 3
        cosmo.src ='Images/cosmo.png';
        open.src ='Images/open.png';
        close.src = 'Images/close.png';
        rouge.src = 'Images/rouge.png';
        vert.src = 'Images/vert.png';
        pltf3.src = 'Images/pltfesp.png';
        aste.src = 'Images/aste.png';
    

  
    //Obstacles niveau 2
    
        var p1 = new Obstacle(-22+17,54,2,55);
        var p2 = new Obstacle(110+17,132,2,105);
        var p3 = new Obstacle(280+17,46,2,17);
        var p4 = new Obstacle(340+17,100,12,15);
        var p5 = new Obstacle(483+17,78,2,8);
        var p6 = new Obstacle(550+17,10,1,60)
        var obs = [p1,p2,p3,p4,p5,p6];
        var equip = new Obstacle(590+17,17,50,50);
        var porte2 = new Obstacle(280+17,290,80,15);
    

    //Obstacles niveua 3
    
        var tenu = new Obstacle(150,190,20,30);
        var bouton = new Obstacle(-10,135,5,5);
        var porte3 = new Obstacle(685,132,30,30);
    
        var p1 = new Obstacle(10,307,1,16);
        var p2 = new Obstacle(0,187,1,16);
        var p3 = new Obstacle(110,255,1,24);
        
        var obs1 = [p1,p2,p3];
    
        var t1 = new Obstacle(289,29,30,30);
        var t2 = new Obstacle(475,195,30,30);
        var t3 = new Obstacle(597,368,30,30);
        var trounoir = [t1,t2,t3];
    
        var a1 = new Obstacle(240,460,8,8);
        var a2 = new Obstacle(320,-50,5,5);
        var ast = [a1,a2]
    
        
       

    //Obstacles niveau 1
        
        var porte1 = new Obstacle(600,226,80,15);
        
    // Une fois l'image chargée on déclenche la boucle
    
        fond1.onload = function()
        {
            setInterval(boucle, 40);
        };

    // Boucle
    
    function boucle() 
    {
        
         if(clavier.space) {
         changement = true;    
    }
       
//niveau 1
        
if(niveau == 1) {
    
    //changement
    if(changement == true) {
        posX = 0;
        posY = 0;
        win = false;
        changement = false;
    }
    

        //IMAGE
        
            ctx.drawImage(fond1,0,0,700,400);
            ctx.drawImage(perso,64*pas,dir*65,64,63,4+posX,247+posY,64,65); 
        
        
        //PORTE
      
        if(porte1.collision(posX-6,247+posY,64,65))
            win = true;
        if(win){
            ctx.drawImage(youwin,0,0,601,389,0,0,700,400);
            temps++;    
        }
    
        if(temps>=30) {
            niveau = 2;
            changement = true;
        }
        
    //Sol
    
        coll=false;
       if(posY >= 0) 
              coll = true;
       

        //SPRITE
        
            if (pas > 7)
                    pas = 0;
        
        

        //SAUT
        

            if(saut == true)
            {       
                    compteur--;
                    if(compteur >= 0)
                    {
                        posY = posInit+(-100+(10-compteur)*(10-compteur));
                    }
                    if (coll == true && compteur <= 10)
                    {
                        compteur = 0;
                        posY = posY;
                    }
                    if(compteur == 0)
                        {saut = false;} 
            }
    
         //DIRECTION
        if(!win){
            

            if (clavier.droite && posX<=653)
            {            
                pas++;
                dir = 11;
                posX += 5;     		
            }
            else if (clavier.gauche && posX>=-24)
            {
                dir = 9;
                pas++;
                posX -= 5
            }

            else if (clavier.haut)
            {
                if(saut == false)
                    { 
                        compteur = 20;
                        posInit = posY;
                    }
                if(coll == true)
                    saut = true;
            }
        }
}
// fin niveau 1
     
        
        
        
        
        
//niveau 2
        
    if(niveau == 2) {
        
        //mise à zéro
        if(changement == true) {
            posX = 0;
            posY = 5;
            win = false;
            colequip = false;
            temps = 0;
            over = false;
            pas = 0;
            dir = 11;
            y = 1;
            z = 1;
            changement = false;
        }
        
        
        //IMAGE
        
            ctx.drawImage(fond2,0,0,700,400);
            ctx.drawImage(pltf,92,183,180,36,p5.x+4,p5.y+90,50,12);
            ctx.drawImage(pltf,92,183,200,36,p4.x+4,p4.y+90,65,12);
            if(colequip == false) {                   
                ctx.drawImage(plonger,0,0,128,135,545+45,68,50,50);
            }
            ctx.drawImage(perso,64*pas,dir*65,64*z,63,41+posX,92+posY,64*y,65*y); 
        
        
        //PORTE
        
        if(porte2.collision(posX,posY,64,65) && colequip == true)
            win = true;
        if(win == true){
            ctx.drawImage(youwin,0,0,601,389,0,0,700,400);
            temps++;
        }
        
        
        if(temps >= 40) {
            niveau = 3;
            changement = true;
        }
        

        //PLATEFORME MOUVEMENT
            
            if(pospltf>140)
                {
                    sens = -1; 
                 }
            if(pospltf<0)
                { sens = 1; }
            pospltf = pospltf + sens * 5;
            p4.x = p4.x + sens * 5;
            p5.y = p5.y + sens * 5;
        
        
            if(p4.collision(posX,posY,64,65))
                {
                    posX = posX + sens * 5;   
                }
            if(p5.collision(posX,posY,64,65))
                {
                    posY = posY + sens * 5;
                }

        //SPRITE
        
            if (pas > 7)
                {
                    pas = 0;
                }
        

        //SAUT
        
        
        if(saut == true)
        {       
                compteur--;
                if(compteur >= 0)
                {
                    posY = posInit+(-100+(10-compteur)*(10-compteur));
                }
                if (coll == true && compteur <= 10)
                {
                    compteur = 0;
                    posY = posY;
                }
                if(compteur == 0)
                    {saut = false;}           
        }
        
        
           //EQUIPEMENT
        
        if(equip.collision(posX,posY,64,65))
            {colequip = true;}
                
         if(colequip == true && posY >= 200)
         {
            dir = 22;
            z = 2;
            y = 1.5;
            
            if (clavier.droite && posX<=515 && !win)
            {            
                posX+=4;
                pas=2;
            }
            else if (clavier.gauche && posX>=0 && !win)
            {
                posX-=4;
                pas=0;
            }
            else if (clavier.haut && posY >= 195 && !win)
            {
                posY -= 4;
                pas = 0;
            }
            else if (clavier.bas&& posY <= 300 && !win)
            {
                posY += 5;
                pas = 2;
            }
        }
        
        
        else 
        { 
            //DIRECTION

            if (clavier.droite && posX<=575 && !coldroite)
            {            
                pas++;
                dir = 11;
                posX += 4;     		
            }
            else if (clavier.gauche && posX>=-24)
            {
                dir = 9;
                pas++;
                posX -= 3;
            }


            else if (clavier.haut)
            {
                if(saut == false)
                    { 
                        compteur = 20;
                        posInit = posY;
                    }
                if(coll == true)
                    saut = true;
            }
            
            //GRAVITE
        
            coll = false;
            for(p in obs)
            {
                if (obs[p].collision(posX+2,posY-6,64,65))
                    {coll = true;}
            }
            
            if(!coll)
            {       
                posY = posY+6;
                dir = 3;
                pas = 5; 
                if (posY >= 340)
                    over = true;    
            }
            if(over)
                {ctx.drawImage(gameover,0,0,601,389,0,0,700,400);}
            
            
        } 
    }
    // fin niveau 2
        
        
    //niveau 3
        
 if(niveau == 3)  {   
     
     
     //mise à zéro
        if(changement == true) {
            posX=4;
            posY=320;
            win = false;
            colequip = false;
            temps=0;
            porteouverte = false;
            over = false;
            pas = 0;
            dir = 11;
            changement = false;
        }
     
    //IMAGE
            ctx.save();
            ctx.drawImage(fond3,0,0,700,400);
            
            if(porteouverte == false)
            {
                ctx.drawImage(close,98,0,125,168,0,0,235,400);
                ctx.drawImage(rouge,0,0,27,24,8,155,23,20);
            }
            else
            {
                ctx.drawImage(open,98,0,125,168,0,0,235,400);
                ctx.drawImage(vert,0,0,27,24,8,155,23,20);
            }
        
            if(colequip == false)
                {ctx.drawImage(cosmo,15,7,105,180,115,193,35,60);}
        
            ctx.drawImage(pltf3,0,0,50,8,0,300,50,8);
            ctx.drawImage(pltf3,0,0,50,8,-10,185,50,8);
            ctx.drawImage(pltf3,0,0,50,8,80,250,75,8);
             
            ctx.translate(posX+30,posY+30);     
            ctx.rotate(theta);                  
            ctx.scale(s,s);                     
            ctx.translate(-30,-30);             
            ctx.drawImage(perso,64*pas,dir*65,64,63,0,0,64,65);  
            ctx.restore();
        
        
     //asteroide
            ctx.drawImage(aste,31,35,184,172,a1.x,a1.y,30,30);
            ctx.drawImage(aste,31,35,184,172,a2.x,a2.y,20,20);

            if(a1.y >= 450)
                a = 1;
            if(a1.y <= -50)
                a = -1;
            a1.y -= 6*a;
            a1.x += 4*a;
            a2.y += 8*a;
            a2.x += 5*a;

            for(p in ast) {
                if(ast[p].collision(posX,posY,64,65)) {
                    over = true;
                }
            }
            if(over == true) {
                ctx.drawImage(gameover,0,0,601,389,0,0,700,400);
            }
            
       
        
 //gauche    
        if (posX <= 145) {
            
                theta = 0;
                
                //SPRITE
                    if (pas > 7)
                        {pas = 0;}

                //EQUIPEMENT
                
                    if(tenu.collision(posX,posY,64,65))
                        {colequip = true;}
                
                //GRAVITE
        
                    coll = false;

                    if(posY > 320) {
                        coll = true;
                    }
                    for(p in obs1) {
                        if (obs1[p].collision(posX,posY,64,65))
                            {coll = true;}   
                    }
                    if(coll != true) {       
                        posY = posY+6;
                        dir = 3;
                        pas = 5; 
                    }
            
                
                //DEPLACEMENT
                  
                    if (clavier.droite) {   
                        if(posX <= 140)
                        {
                            pas++;
                            dir = 11;
                            posX += 4;    
                        }   		
                    }
                    else if (clavier.gauche && posX>=-24) {
                        dir = 9;
                        pas++;
                        posX -= 3;
                    }
                                            
                    else if (clavier.haut) {           
                                if(saut == false){
                                compteur = 20;
                                posInit = posY;
                                    
                                }
                            
                       if(coll == true)
                            saut = true;
                    }
                
                //SAUT
            

                     if(saut == true) {
                        compteur--;
                        if(compteur > 0) {
                            posY = posInit+(-100+(10-compteur)*(10-compteur));
                        }
                        
                         if(p3.collision(posX,posY,64,65) &&  compteur>10 || p2.collision(posX,posY,64,65) &&  compteur>10)
                             {compteur = 20-compteur;}
                        
                         if (coll == true && compteur <= 10) {
                            compteur = 0;
                            posY = posY;
                       }
                        if(compteur == 0)
                            {saut = false;}           
                     }
                
            
     
                //OUVERTURE PORTE
                    
                    if(bouton.collision(posX+2,posY,64,65)) 
                            porteouverte = true;
                        
            }
        
        
    //droite espace
        
        
        
        if(posX >= 140 && porteouverte == true) {  
            
                //SPRITE
                    dir = 21;
                
                //BESOIN DE L'EQUIPEMENT
                
                    if (colequip == false)
                       over = true; 
                
                //GRAVITE
                
                    if(colltrounoir == false && !win)
                        posY--;
                
                    theta = theta+0.01;
                
                //TROUNOIR
                
                    for(t in trounoir) {
                        if (trounoir[t].collision(posX+2,posY-6,64,65)) {
                            colltrounoir = true;
                        }
                    }
                    if (colltrounoir == true && s >= 0) {
                        theta = theta+0.2;
                        s = s-0.01;
                    }
                    if(s <= 0)
                       over = true; 
                
                //DEPLACEMENT
                
                    if(over != true && colltrounoir == false && !win) {
                        if (clavier.droite && posX <= 700) 
                        {            
                            posX += 4;
                            pas = 1;
                        }
                        else if (clavier.gauche)
                        {
                            posX -= 4;
                            pas = 5;
                        }
                        else if (clavier.haut)
                        {
                            posY -= 4;
                            pas = 5;
                        }
                        else if (clavier.bas)
                        {
                            posY += 5;
                            pas = 10;
                        }
                    }

                 //YOU WIN
                
                    if(porte3.collision(posX+2,posY-6,64,65) && colequip == true)
                        win = true;
                    if(win == true)
                        ctx.drawImage(youwin,0,0,601,389,0,0,700,400);
                
                
            }
 }
//fin niveau 3        
        
        

            
       //boucle     
        }
       
    //window 
    }
	