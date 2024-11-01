// Instagram Integration (example using embed)
const instagramPhotos = document.getElementById('instagram-photos');
const instagramEmbed = `
    <iframe src="https://instagram.com/p/CÓDIGO_DE_INSTAGRAM/embed" width="320" height="400" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
`;
instagramPhotos.innerHTML = instagramEmbed;

// Facebook Page Plugin (example with the Page plugin)
const facebookPhotos = document.getElementById('facebook-photos');
const facebookEmbed = `
    <div class="fb-page" data-href="https://web.facebook.com/juventud.sacachispa/?_rdc=1&_rdr#" data-tabs="timeline" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true">
        <blockquote cite="https://web.facebook.com/juventud.sacachispa/?_rdc=1&_rdr#" class="fb-xfbml-parse-ignore"><a href="https://web.facebook.com/juventud.sacachispa/?_rdc=1&_rdr#">Sacachispas FC</a></blockquote>
    </div>
`;
facebookPhotos.innerHTML = facebookEmbed;
