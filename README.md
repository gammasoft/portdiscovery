portdiscovery
=============

Finds an open port (using [portfinder](https://github.com/indexzero/node-portfinder)) and sends output to stdout

```bash
npm install -g portdiscovery
```

#### Usage

Simply run `portdiscovery` and it will look for open ports starting in 8000. 

You can specify a base port if `8000` doesn't fit your needs: `portdiscovery 8010`

#### Cool tip

You can assign to a bash variable then use it to deploy your apps, for example:

```bash
httpPort=$(portdiscovery)
echo $httpPort
```
