![alt text](https://raw.githubusercontent.com/ossgroupp/osspim-content-transformer/HEAD/media/logo.png 'Pie with slice')

# OSSPIM Content Transformer

Validation, parsing and transforming for [OSSPIM Content](https://ossgroup.com/developers/react-components/osspim-content-transformer). Makes it easy to build React Commerce solutions with [Product Information Management](https://ossgroup.com/product/product-information-management) powered by [OSSPIM](https://ossgroup.com) that enable [Fast Ecommerce API](https://ossgroup.com/product/graphql-commerce-api).

## Install

```
yarn add @osspim/content-transformer
```

## Validate

```
import validator from '@osspim/content-transformer';

const isValid = validator.isModelValid(myModel);
const validationDetails = validator.isModelValidVerbose(myModel);
```

## toHTML

```
import toHTML from '@osspim/content-transformer/toHTML';

toHtml(contentModel);
```

## toText

```
import toText from '@osspim/content-transformer/toText';

toText(contentModel);
```

## React

See [@osspim/react-content-transformer](https://www.npmjs.com/package/@osspim/react-content-transformer)
# osspim-content-transformer
