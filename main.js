class Anim8 {
  parse(e) {
    var code = e.split(';');
    var img;
    code.forEach((ln) => {
      if ('Image' in ln) {
        if (ln == 'Image init()') {
          img = document.createElement('svg');
        }
        else if (ln == 'Image end()') {
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img);
          return canvas.toDataURL();
        }
      }
      else if ('new' in ln) {
        if ('new circle' in ln) {
          var circle = document.createElement('circle');
          var attr = ln.substr(12, ln.length).split(',') || ['#000000', '50%', '50%', '25'];
          circle.fill = attr[0];
          circle.cx = attr[1];
          circle.cy = attr[2];
          circle.r = attr[3]
          img.appendChild(circle)
        }
        else if ('new quad' in ln) {
          var quad = document.createElement('rect');
          var attr = ln.substr(8, ln.length).split(',') || ['#000000', '50%', '50%', '50', '50', '0'];
          quad.fill = attr[0];
          quad.x = attr[1];
          quad.y = attr[2];
          quad.width = attr[3];
          quad.heigth = attr[4];
          [quad.rx, quad.ry] = [attr[5], attr[5]];
          img.appendChild(quad);
        }
        else if ('new line' in ln) {
          var line = document.createElement('line');
          var attr = ln.substr(8, ln.length).split(',') || ['#000000', '25%', '50%', '75%', '50%'];
          line.x1 = attr[1];
          line.x2 = attr[2];
          line.y1 = attr[3];
          line.y2 = attr[4];
          line.style.stroke = attr[0];
          img.appendChild(line);
        }
        else if ('new text' in ln) {
          var text = document.createElement('text');
          var attr = ln.substr(8, ln.length).split(',') || ['#000000', '50%', '50%', 'Hello world!'];
          text.fill = attr[0];
          text.x = attr[1];
          text.y = attr[2];
          text.innerText = attr[3];
          img.appendChild(text);
        }
        else if ('new image' in ln) {
          var image = document.createElement('image');
          var attr = ln.substr(9, ln.length).split(',') || ['https://i.imgflip.com/4/44eggm.jpg', '50%', '50%'];
          image.href = attr[0];
          image.x = attr[1];
          image.y = attr[2];
          img.appendChild(image);
        }
      }
    });
  }
}
