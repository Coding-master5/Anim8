# Anim8
Anim8 is a programming language I am making used for graphic design.
It will be a useful alternative to SVG in HTML files.
Here is a syntax example using a custom `<script>` type:
```
<script type='text/anim8'>
  Image init();
  new circle '#ff0000', '50%', '50%', '50';
  new text 'Hello world!', '50%', '50%';
  Image end();
</script>
```
As you can see, it uses some basic concepts of SVG files to create very basic images, which can be appended to the screen.
The data is returned as a `dataurl`.
Example:
```
<button onclick='appendImage()'>Run</button>
<script>
  var image = parse("Image init();
    new circle '#ff0000', '50%', '50%', '50';
    Image end();"
  );
  var img = document.createElement('img');
  img.src = image;
  document.body.appendChild(img);
</script>
```
This example creates a circle and appends an image with the circle's `dataurl` into the HTML document.
Find more information at the [Anim8 documentation](https://coding-master5.github.io/Anim8/docs.html)
