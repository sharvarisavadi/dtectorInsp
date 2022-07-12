
## Description

Assumptions - This application only scans the page 'https://en.wikipedia.org/wiki/Women%27s_high_jump_world_record_progression' and all the scans are respective of this page.

Due to time constraint I was not able to implement all the functionality But I will explain What my strategy would be to finish the whole requirement.
I have only completed a part where the endpoint scans the above url and returns the numeric values

Next I would be creating a one more component to generate image. I was planning to use canvas library to generate an image. We can pass this output of obove function to image create function which will generate an image and saves onto to specific dick.(can be made as configurable via .env file. i.e save)

I will also create unit test which will make sure obove output returns array of numeric values, one positive scanaro which will return numetric value, one negative scenario which will  retun false.

I will create another unit test for image generation component to make sure it does not generate image for wrong input data.

to 


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
