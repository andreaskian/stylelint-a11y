# no-text-align-left-right-justify

Disallow `{ text-align: left|right|justify; }` anywhere.

## Options

### true

The following pattern are considered violations:

```css
.foo {
  text-align: left;
}
```

```css
.foo {
  text-align: right;
}
```

```css
.foo {
  text-align: justify;
}
```

The following patterns are _not_ considered violations:


```css
.foo {
  text-align: inherit;
}
```

```css
.foo {
  text-align: start;
}
```

```css
.foo {
  text-align: end;
}
```

```css
.foo {
  text-align: center;
}
```
