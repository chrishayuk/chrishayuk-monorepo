# Linval
Linval is our favorite server...
Linval might not be the fastest, but he is solid.
Linval loves to serve up images.

## starting linval in dev
you can either run linval from dev in the monorepo

```
npx turbo run dev
```

or directly from the apps folder

```
npm run dev
```

## building linval
you can either build linval from dev in the monorepo

```
npx turbo run build
```

or directly from the apps folder

```
npm run build
```

## executing linval hello world
if you want a friendly message from linval call

```
curl localhost:3000
```

## text2png
linval can generate a png with text you pass him

```
http://localhost:3000/?text=chrishayuk
```

by default linval won't slow down passing the image, but if you need him to delay sending back the image you can ask him to do so.  The following example delays the response by 2 seconds

```
http://localhost:3000/?text=chrishayuk&sleep=2000
```

