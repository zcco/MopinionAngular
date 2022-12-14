# MopinionAngular
Empty Angular Project Test For Mopinion Implementation

We are testing the reload of mopinion forms in a single page angular app that does not refresh when routing to a different view.

## Deploy script
Instead of running an inline script we opt to call the load function in typescript on the app init.

```
<!-- Original inline deploy script -->
    <script type="text/javascript">
      (function(){
        var id="[id]";
        var js=document.createElement("script");
        js.setAttribute("type","text/javascript");
        js.setAttribute("src","//deploy.mopinion.com/js/pastease.js");
        js.async=true;document.getElementsByTagName("head")[0].appendChild(js);
        var t=setInterval(
          function(){
            try{Pastease.load(id);clearInterval(t)
            }catch(e){}
          },50)
      })();
    </script>
```

Complying with strict CSP guidelines does not allow for inline scripts. Implementing mopinion in this way allows us to load and use the pastease.js without having to generate a nonce. We load the pastease.js and seperately call the .load function when the app has been initialized.
```
<!-- Our deploy script - index.html -->
    <script id="mopinion-script" src="//deploy.mopinion.com/js/pastease.js" data-siteid="[id]" async defer></script>
```

```
<!-- Calling load function - app.component.ts -->
  ngAfterViewInit(): void {
    const mopinionScriptTag = document.getElementById('mopinion-script');
    if (mopinionScriptTag) {
      const mopinionId = mopinionScriptTag.getAttribute('data-siteid');
      if (mopinionId) {
        this.loadPastease(mopinionId);
      }
    }
  }

  loadPastease(id: string) {
    try {
      // @ts-ignore
      new Pastease.load(id);
    } catch (err) {
      console.log(err);
    }
  }
```

