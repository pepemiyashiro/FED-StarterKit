({
  plugins: ["jsdom-quokka-plugin"],
  jsdom: {
    html: '<div id="global"><div class="js-banner-hover"></div></div>'
  }
})

const banner = document.querySelector('.js-banner-hover');

banner.addEventListener('click', e => window.alert( e.target + ' Hi there' ) );

let test = [1,2,3,4,5]

test
