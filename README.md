# Mbizmarket Login Button
A button that simplifies the Connect to Mbizmarket flow on your website

## Prerequisites
Make sure you already have a Client ID from Mbizmarket and a configured callback URL to ensure the smoothest installation flow. Please [contact us](https://www.mbizmarket.co.id/kontak) for detail how to get clientId

## Installation
Here's some ways you can install Mbizmarket Login Button

### With NPM
Use this method if you're using NPM or other package manager.

Run this command on your project folder

```sh
  npm i @mbizmarket/login-button-mbizmarket
```
or the equivalent command in your preferred package manager

After installation, you can import the package with this line:

```ts
import MBIZMARKET from "@mbizmarket/login-button-mbizmarket"
```
or, if your project didn't support ESM yet:

```js
const MBIZMARKET = require("@mbizmarket/login-button-mbizmarket").default
```
And now the library is ready to use


### Via CDN
Use this method if you don't use NPM or other similar package managers.

Add this line to your HTML file, preferrably below your UI markup

#### with unpkg
use latest version
```html
<script src="https://www.unpkg.com/@mbizmarket/login-button-mbizmarket/dist/index.global.js"></script>
```
or using specific version:

```html
<script src="https://www.unpkg.com/@mbizmarket/login-button-mbizmarket@1.0.4/dist/index.global.js"></script>
```

#### with jsdelivr
```html
<script src="https://cdn.jsdelivr.net/npm/@mbizmarket/login-button-mbizmarket/dist/index.global.js"></script>
```
or using specific version:

```html
<script src="https://cdn.jsdelivr.net/npm/@mbizmarket/login-button-mbizmarket@1.0.4/dist/index.global.js"></script>
```

After that, now the namespace `MBIZMARKET` is available globally and ready to use

## Usage

To create the button, just create a `div` like this:
(Please make sure that the redirectUrl and your domain url is same.)

```html
<div
  data-mbizmarket-login
  data-mbizmarket-client-id="<YOUR-CLIENT-ID>"
  data-mbizmarket-redirect-url="<YOUR-CALLBACK-URL>"
></div>
```

And add this line to your script:
```ts
MBIZMARKET.init()
```

And the button should show up with the default configuration.

After button clicked and successfully redirect back to your redirectUrl, you will get string code in query string, and use the given code to save to your user session.

Example in PHP:

```php
// in your callback php-controller
<?php

$code = $this->request->getQuery('code');
if (!empty($code)) {
  $this->session->set('codeMbizmarket', $code);
}

?>
```

```php
// in view
<script src="https://cdn.jsdelivr.net/npm/@mbizmarket/login-button-mbizmarket@1.0.4/dist/index.global.js"></script>

{% if ($session->get('codeMbizmarket')) %}

  <p>Connected to Mbizmarket</p>
  <a href="https://www.mbizmarket.co.id/sso/authenticate?authKey={$session->get('codeMbizmarket')}&clientId=<YOUR-CLIENT-ID>" target="_blank">Go to Mbizmarket</a>

{% else %}

  <div
    data-mbizmarket-login
    data-mbizmarket-client-id="<YOUR-CLIENT-ID>"
    data-mbizmarket-redirect-url="<YOUR-CALLBACK-URL>"
  ></div>

{% endif %}

<script>

  MBIZMARKET.init()
</script>
```

## Customization

Currently, you can only customize the text of the login button by adding data attributes to the `div`. Here's the available customization configuration:

- `data-text-connect`: Change the text on default state (i.e. the initial state)
- `data-text-connecting`: Change the text when clicked and loading
