# HTML

## Modern structure
```html
<body>
    <header>
        <div class="container">
            ...
        </div>
    </header>

    <section class="section-one">
        <div class="container">
            ...
        </div>
    </section>

    <section class="section-two">
        <div class="container">
            ....
        </div>
    </section>
</body>
```


## Core tags
| Tag Name        | Meaning / Use                                                 | Attributes       | 
| --------------- | ------------------------------------------------------------- | ---------------- | 
| `<p>`           | Paragraph of text.                                            |
| `<div>`         | Division or container for grouping elements (block-level).    |
| `<a>`           | Hyperlink (anchor).                                           | href target
| `<img>`         | Image.                                                        | src

## Headings
- Only use one `h1` per page. No more, no less.  
- Heading numbers should be consecutive. No skip.   
- Headings always introduce new content sections. A heading for some content should never be a `<p>` or a `<div>`.   

| Tag Name        | Meaning / Use                                                 | Attributes       | 
| --------------- | ------------------------------------------------------------- | ---------------- | 
| `<h1>` – `<h6>` | Headings — `<h1>` is the largest, `<h6>` the smallest.        |

## Landmark regions
| Tag Name        | Meaning / Use                                                 | Attributes       | 
| --------------- | ------------------------------------------------------------- | ---------------- | 
| `<nav>`         | Navigation section (menu links).                              |
| `<header>`      | Header section of a page or article.                          |
| `<main>`        | The main content area.                                        |
| `<article>`     | a self-contained composition which is independently distributable or reusable, like blogs, news                                     |
| `<section>`     | Logical section or topic block.                               |
| `<footer>`      | Footer section.                                               |

## Connected consecutive items
| Tag Name        | Meaning / Use                                                 | Attributes       | 
| --------------- | ------------------------------------------------------------- | ---------------- | 
| `<ul>`          | Unordered list (with bullet points).                          |
| `<ol>`          | Ordered list (with numbers).                                  |
| `<li>`          | List item (inside `<ul>` or `<ol>`).                          |



| Tag Name        | Meaning / Use                                                 | Attributes       | Usage       | 
| --------------- | ------------------------------------------------------------- | ---------------- | ----------- | 
| `<dl>`          | Description list.                                             |                  | metadata 
| `<dt>`          | Description term (inside `<dl>`).                             |                  |
| `<dd>`          | Description details (inside `<dl>`).                          |                  |


| Tag Name        | Meaning / Use                                                 | Attributes       | Usage       | 
| --------------- | ------------------------------------------------------------- | ---------------- | ----------- | 
| `<br>`          | Line break.                                                   |
| `<hr>`          | Horizontal line (divider).                                    |


## Formatting Elements

| Tag Name        | Meaning / Use                                                 | Attributes       | Usage       | 
| --------------- | ------------------------------------------------------------- | ---------------- | ----------- | 
| `<mark>`        | Highlight in yellow.                                          |                  | 
| `<strong>`          |                            |                  |
| `<b>`          |                           |                  |
| `<i>`          |                           |                  |
| `<em>`          |                           |                  |
| `<del>`          | Deleted text.                          |                  |
| `<ins>`          | Inserted text.                        |                  |
| `<sub>`          |                        |                  |
| `<sup>`          |                         |                  |
