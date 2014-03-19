# Tab HTML Code Examples

## ARIA tabpanel

http://accessibleculture.org/research-files/aria-tabs/version3b.php

### Source HTML:

```html
<div id="tabs">
  <ul>
    <li><a href="#first">First Tab</a></li>
    <li><a href="#second">Second Tab</a></li>
    <li><a href="#third">Third Tab</a></li>
  </ul>
  <div>
    <h2 id="first">First Tab's Main Heading</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur blandit tellus nec turpis. In at sem. Nunc tempus sem. Morbi tincidunt diam vitae purus. Nulla facilisi. Curabitur facilisis ligula ut dui. Vivamus placerat, <a href="#">libero ut convallis elementum</a>, urna nisi nonummy libero, eu porttitor ante neque eu nulla.</p>
    <p>Quisque ac velit. Phasellus ac eros in sapien <a href="#">congue elementum</a>. Donec vitae massa vitae magna rutrum placerat. Vestibulum tortor. Cras vitae justo at nisi commodo euismod.</p>
  </div>
  <div>
    <h2 id="second">Second Tab's Main Heading</h2>
    <p>Aliquam vehicula justo ut metus. <a href="#">Maecenas sollicitudin</a>, leo vel eleifend consectetuer, ligula magna hendrerit massa, a facilisis eros tellus non arcu. Quisque pulvinar, metus sed ullamcorper lacinia, nulla nibh consequat libero, ac nonummy quam diam ut neque. Suspendisse interdum lacinia nulla.</p>
  <p>Quisque dapibus feugiat magna. Nunc velit erat, congue eget, tristique et, scelerisque id, quam. Phasellus nonummy enim in pede. <a href="#">Phasellus metus nibh</a>, ultrices convallis, auctor aliquet, suscipit eu, nisi.</p>
  </div>
  <div>
    <h2 id="third">Third Tab's Main Heading</h2>
    <p>Sed ut lectus in tellus blandit dapibus. <a href="#">Mauris elit quam</a>, fringilla vel, luctus eu, molestie sit amet, diam. Quisque dapibus feugiat magna. Nunc velit erat, congue eget, tristique et, scelerisque id, quam. Phasellus nonummy enim in pede. Phasellus metus nibh, ultrices convallis, auctor aliquet, suscipit eu, nisi.</p>
  </div>
</div>
```

### Rendered HTML:

```html
<div id="tabs">
  <ul class="tabsList" role="tablist">
    <li role="presentation" class="current"><a href="#first" id="tab-first" role="tab" aria-selected="true" tabindex="0">First Tab</a></li>
    <li role="presentation" class=""><a href="#second" id="tab-second" role="tab" aria-selected="false" tabindex="-1">Second Tab</a></li>
    <li role="presentation" class=""><a href="#third" id="tab-third" role="tab" aria-selected="false" tabindex="-1">Third Tab</a></li>
  </ul>
  <div class="tabPanel" role="tabpanel" aria-hidden="false" tabindex="0" aria-labelledby="tab-first" style="display: block;">
    <h2 id="first">First Tab's Main Heading</h2>
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur blandit tellus nec turpis. In at sem. Nunc tempus sem. Morbi tincidunt diam vitae purus. Nulla facilisi. Curabitur facilisis ligula ut dui. Vivamus placerat, <a href="#">libero ut convallis elementum</a>, urna nisi nonummy libero, eu porttitor ante neque eu nulla.</p>
    <p>Quisque ac velit. Phasellus ac eros in sapien <a href="#">congue elementum</a>. Donec vitae massa vitae magna rutrum placerat. Vestibulum tortor. Cras vitae justo at nisi commodo euismod.</p>
  </div>
  <div class="tabPanel" role="tabpanel" aria-hidden="true" tabindex="0" aria-labelledby="tab-second" style="display: none;">
    <h2 id="second">Second Tab's Main Heading</h2>
    <p>Aliquam vehicula justo ut metus. <a href="#">Maecenas sollicitudin</a>, leo vel eleifend consectetuer, ligula magna hendrerit massa, a facilisis eros tellus non arcu. Quisque pulvinar, metus sed ullamcorper lacinia, nulla nibh consequat libero, ac nonummy quam diam ut neque. Suspendisse interdum lacinia nulla.</p>
  <p>Quisque dapibus feugiat magna. Nunc velit erat, congue eget, tristique et, scelerisque id, quam. Phasellus nonummy enim in pede. <a href="#">Phasellus metus nibh</a>, ultrices convallis, auctor aliquet, suscipit eu, nisi.</p>
  </div>
  <div class="tabPanel" role="tabpanel" aria-hidden="true" tabindex="0" aria-labelledby="tab-third" style="display: none;">
    <h2 id="third">Third Tab's Main Heading</h2>
    <p>Sed ut lectus in tellus blandit dapibus. <a href="#">Mauris elit quam</a>, fringilla vel, luctus eu, molestie sit amet, diam. Quisque dapibus feugiat magna. Nunc velit erat, congue eget, tristique et, scelerisque id, quam. Phasellus nonummy enim in pede. Phasellus metus nibh, ultrices convallis, auctor aliquet, suscipit eu, nisi.</p>
  </div>
</div>
```


## Twitter Bootstrap 3

```html
<!-- Nav tabs -->
<ul class="nav nav-tabs">
  <li class="active"><a href="#home" data-toggle="tab">Home</a></li>
  <li><a href="#profile" data-toggle="tab">Profile</a></li>
  <li><a href="#messages" data-toggle="tab">Messages</a></li>
  <li><a href="#settings" data-toggle="tab">Settings</a></li>
</ul>

<!-- Tab panes -->
<div class="tab-content">
  <div class="tab-pane active" id="home">...</div>
  <div class="tab-pane" id="profile">...</div>
  <div class="tab-pane" id="messages">...</div>
  <div class="tab-pane" id="settings">...</div>
</div>
```

## Bootstrap Accessible Tabs

http://paypal.github.io/bootstrap-accessibility-plugin/demo.html#tabs

Uses the same source HTML as in the Bootstrap example above.

### Rendered HTML:

Note: need to research what the following do:
  aria-expanded
  aria-selected
  aria-controls


```html
<div class="bs-example bs-example-tabs">
  <ul id="myTab" class="nav nav-tabs" role="tablist">
    <li class="active" role="presentation"><a href="#home" data-toggle="tab" role="tab" id="ui-tab-523" tabindex="0" aria-expanded="true" aria-selected="true" aria-controls="home">Home</a></li>
    <li role="presentation"><a href="#profile" data-toggle="tab" role="tab" id="ui-tab-541" tabindex="-1" aria-expanded="false" aria-selected="false" aria-controls="profile">Profile</a></li>
    <li role="presentation"><a href="#dropdown1" tabindex="-1" data-toggle="tab" role="tab" id="ui-tab-984" aria-expanded="false" aria-selected="false" aria-controls="dropdown1">@fat</a></li>
    <li role="presentation"><a href="#dropdown2" tabindex="-1" data-toggle="tab" role="tab" id="ui-tab-414" aria-expanded="false" aria-selected="false" aria-controls="dropdown2">@mdo</a></li>
  </ul>
  <div id="myTabContent" class="tab-content">
    <div class="tab-pane fade in active" id="home" role="tabpanel" tabindex="0" aria-hidden="false" aria-labelledby="ui-tab-523">
      <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
    </div>
    <div class="tab-pane fade" id="profile" role="tabpanel" tabindex="-1" aria-hidden="true" aria-labelledby="ui-tab-541">
      <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
    </div>
    <div class="tab-pane fade" id="dropdown1" role="tabpanel" tabindex="-1" aria-hidden="true" aria-labelledby="ui-tab-984">
      <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>
    </div>
    <div class="tab-pane fade" id="dropdown2" role="tabpanel" tabindex="-1" aria-hidden="true" aria-labelledby="ui-tab-414">
      <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>
    </div>
  </div>
</div>
```


## Zurb Foundation

```html
<dl class="tabs" data-tab>
  <dd class="active"><a href="#panel2-1">Tab 1</a></dd>
  <dd><a href="#panel2-2">Tab 2</a></dd>
  <dd><a href="#panel2-3">Tab 3</a></dd>
  <dd><a href="#panel2-4">Tab 4</a></dd>
</dl>
<div class="tabs-content">
  <div class="content active" id="panel2-1">
    <p>First panel content goes here...</p>
  </div>
  <div class="content" id="panel2-2">
    <p>Second panel content goes here...</p>
  </div>
  <div class="content" id="panel2-3">
    <p>Third panel content goes here...</p>
  </div>
  <div class="content" id="panel2-4">
    <p>Fourth panel content goes here...</p>
  </div>
</div>
```

## jQuery UI

```html
<div id="tabs">
  <ul>
    <li><a href="#tabs-1">Nunc tincidunt</a></li>
    <li><a href="#tabs-2">Proin dolor</a></li>
    <li><a href="#tabs-3">Aenean lacinia</a></li>
  </ul>
  <div id="tabs-1">
    <p>Proin elit arcu, rutrum commodo, vehicula tempus, commodo a, risus. Curabitur nec arcu. Donec sollicitudin mi sit amet mauris. Nam elementum quam ullamcorper ante. Etiam aliquet massa et lorem. Mauris dapibus lacus auctor risus. Aenean tempor ullamcorper leo. Vivamus sed magna quis ligula eleifend adipiscing. Duis orci. Aliquam sodales tortor vitae ipsum. Aliquam nulla. Duis aliquam molestie erat. Ut et mauris vel pede varius sollicitudin. Sed ut dolor nec orci tincidunt interdum. Phasellus ipsum. Nunc tristique tempus lectus.</p>
  </div>
  <div id="tabs-2">
    <p>Morbi tincidunt, dui sit amet facilisis feugiat, odio metus gravida ante, ut pharetra massa metus id nunc. Duis scelerisque molestie turpis. Sed fringilla, massa eget luctus malesuada, metus eros molestie lectus, ut tempus eros massa ut dolor. Aenean aliquet fringilla sem. Suspendisse sed ligula in ligula suscipit aliquam. Praesent in eros vestibulum mi adipiscing adipiscing. Morbi facilisis. Curabitur ornare consequat nunc. Aenean vel metus. Ut posuere viverra nulla. Aliquam erat volutpat. Pellentesque convallis. Maecenas feugiat, tellus pellentesque pretium posuere, felis lorem euismod felis, eu ornare leo nisi vel felis. Mauris consectetur tortor et purus.</p>
  </div>
  <div id="tabs-3">
    <p>Mauris eleifend est et turpis. Duis id erat. Suspendisse potenti. Aliquam vulputate, pede vel vehicula accumsan, mi neque rutrum erat, eu congue orci lorem eget lorem. Vestibulum non ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sodales. Quisque eu urna vel enim commodo pellentesque. Praesent eu risus hendrerit ligula tempus pretium. Curabitur lorem enim, pretium nec, feugiat nec, luctus a, lacus.</p>
    <p>Duis cursus. Maecenas ligula eros, blandit nec, pharetra at, semper at, magna. Nullam ac lacus. Nulla facilisi. Praesent viverra justo vitae neque. Praesent blandit adipiscing velit. Suspendisse potenti. Donec mattis, pede vel pharetra blandit, magna ligula faucibus eros, id euismod lacus dolor eget odio. Nam scelerisque. Donec non libero sed nulla mattis commodo. Ut sagittis. Donec nisi lectus, feugiat porttitor, tempor ac, tempor vitae, pede. Aenean vehicula velit eu tellus interdum rutrum. Maecenas commodo. Pellentesque nec elit. Fusce in lacus. Vivamus a libero vitae lectus hendrerit hendrerit.</p>
  </div>
</div>
```

