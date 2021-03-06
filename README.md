# NYCUNextTimetable

This is a course search/browser that aims to create a better experience compared to the original [NYCU timetable](https://timetable.nycu.edu.tw/).

[Demo](https://timetable.enquestor.dev)

## Install

You can deploy the server with `docker-compose`.
```
curl https://raw.githubusercontent.com/Allen-Hu/nycunext/main/docker-compose.yml > docker-compose.yml
docker-compose up -d
```

You will be able to access the website at http://localhost:3000

## Development

1. Clone this project
```
git clone https://github.com/Allen-Hu/nycunext.git
```

2. Install dependencies
```
npm i
```

3. Start a local redis server
You can use docker image from [Official Redis DockerHub](https://hub.docker.com/_/redis) like this:
```
docker run --name some-redis -d redis
```

Check if your server is up and running by connecting to it with redis-cli:
```
redis-cli
127.0.0.1:6379>
```

4. Run dev server
```
npm run dev
```

### Production build

```
npm run build
```

### Build docker image

```
docker build -t [image-name] .
```

## Todo

⬜ en-us language support

⬜ Tests

⬜ Dark Theme

⬜ CI/CD with GitHub Actions

⬜ Better documentation and README
