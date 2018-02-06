# {{ name }}

> {{ description }}

## Build Setup

Install dependencies:
``` bash
$ yarn install
```

## Usage

Now you can either run the application using `webpack-dev-server`, or make a bundle. Each action can be performed using
one of two profiles: `dev` or `prod` which mean *development* and *production* respectively. Development profile is used
by `webpack` to configure the project without any optimization, but for debug purpose. Otherwise, the production profile
is used to drop dead code and run webpack plugins in optimized configurations to minify the output code.

## Make a bundle

To make the application's bundle run the following npm-script:

``` bash
$ yarn build:prod
```

And then, you get your bundle files in the `./dist/` directory created. If you do not specify a profile name, the
`:prod` value will be applied by default. Thus, the following command:

``` bash
$ yarn build
```

... will do the same. 

*Addition:* If you want to make the application's bundle using the development profile configurations, you can specify
the profile in the `build` script as `build:dev`.

## Using development server

To run the application using `webpack-dev-server` run the following npm-script:

``` bash
$ yarn start:dev
```

Webpack will automatically open the application on a new tab in your default browser. If you do not specify a profile
name, the `:dev` value will be applied by default. Thus, the following command:
                                                                                        
``` bash
$ yarn start
```

... will do the same.

*Addition:* If you want to run `webpack-dev-server` using the production profile configurations, you can specify the
profile in the `start` script as `start:prod`. However, you should know the special development features like HMR will
not be applied in this case.
