# Proposal for Capital Framework tab (cf-tabs) HTML



## Source HTML:

```html
<div class="tabs">
    <ul>
        <li><a href="#tabset1-tab1">First Tab</a></li>
        <li><a href="#tabset1-tab2">Second Tab</a></li>
        <li><a href="#tabset1-tab3">Third Tab</a></li>
    </ul>
    <div id="tabset1-tab1">
        <h3>First Tab&apos;s Heading</h3>
        <p>Content</p>
    </div>
    <div id="tabset1-tab2">
        <h3>Second Tab&apos;s Heading</h3>
        <p>Content</p>
    </div>
    <div id="tabset1-tab3">
        <h3>Third Tab&apos;s Heading</h3>
        <p>Content</p>
    </div>
</div>
```

### Rendered HTML:

```html
<div class="tabs">
    <ul class="tablist" role="tablist">
        <li role="presentation" class="active">
            <a href="#first" id="tab-first" role="tab" aria-selected="true" aria-expanded="true" tabindex="0">First Tab</a>
        </li>
        <li role="presentation" class="">
            <a href="#second" id="tab-second" role="tab" aria-selected="false" aria-expanded="false" tabindex="-1">Second Tab</a>
        </li>
        <li role="presentation" class="">
            <a href="#third" id="tab-third" role="tab" aria-selected="false" aria-expanded="false" tabindex="-1">Third Tab</a>
        </li>
    </ul>
    <div id="tabset1-tab1" class="cf-tabpanel" role="tabpanel" aria-hidden="false" tabindex="0" aria-labelledby="tab-first" style="display: block;">
        <h3>First Tab&apos;s Heading</h3>
        <p>Content</p>
    </div>
    <div id="tabset1-tab2" class="cf-tabpanel" role="tabpanel" aria-hidden="true" tabindex="-1" aria-labelledby="tab-second" style="display: none;">
        <h3>Second Tab&apos;s Heading</h3>
        <p>Content</p>
    </div>
    <div id="tabset1-tab3" class="cf-tabpanel" role="tabpanel" aria-hidden="true" tabindex="-1" aria-labelledby="tab-third" style="display: none;">
        <h3>Third Tab&apos;s Heading</h3>
        <p>Content</p>
    </div>
</div>
```