import { createRouter, createWebHistory } from "vue-router";
import FaitPasFait from "../views/fait-pas-fait.vue";
import Timeline from "../views/timeline.vue";
import Home from "../views/home.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            // meta: {
            //   title: 'Bilan de mi-mandat Poitiers Collectif - Retour sur nos engagements',
            //   metaTags: [
            //     {
            //       name: 'description',
            //       content: 'L\'équipe Poitiers Collectif a été élue sur la base d\'un programme. Après trois ans, il est temps de faire un premier bilan !'
            //     },
            //     {
            //       name: 'og:title',
            //       content: 'Bilan de mi-mandat Poitiers Collectif - Retour sur nos engagements'
            //     },
            //     {
            //       property: 'og:description',
            //       content: 'L\'équipe Poitiers Collectif a été élue sur la base d\'un programme. Après trois ans, il est temps de faire un premier bilan !'
            //     },
            //     {
            //       property: 'og:type',
            //       content: 'website'
            //     },
            //     {
            //       property: 'og:url',
            //       content: 'https://mi-mandat.poitierscollectif.fr'
            //     },
            //     {
            //       property: 'og:image',
            //       content: 'https://poitierscollectif.fr/wp-content/uploads/2023/06/bilan-mi-mandat-meta.jpg'
            //     },
            //     {
            //       name: 'twitter:card',
            //       content: 'summary_large_image'
            //     },
            //     {
            //       property: 'twitter:description',
            //       content: 'L\'équipe Poitiers Collectif a été élue sur la base d\'un programme. Après trois ans, il est temps de faire un premier bilan !'
            //     },
            //     {
            //       property: 'twitter:title',
            //       content: 'Bilan de mi-mandat Poitiers Collectif - Retour sur nos engagements'
            //     },
            //     {
            //       property: 'twitter:url',
            //       content: 'https://mi-mandat.poitierscollectif.fr'
            //     },
            //     {
            //       property: 'twitter:image',
            //       content: 'https://poitierscollectif.fr/wp-content/uploads/2023/06/bilan-mi-mandat-meta.jpg'
            //     }
            //   ]
            // }
          },

          
      {
        path: "/bilan-de-nos-actions",
        name: "fait-pas-fait",
        component: FaitPasFait,
        // meta: {
        //   title: 'Bilan de nos actions Poitiers Collectif',
        //   metaTags: [
        //     {
        //       name: 'description',
        //       content: 'L\'équipe Poitiers Collectif a été élue sur la base d\'un programme. Après trois ans, il est temps de faire un premier bilan !'
        //     },
        //     {
        //       name: 'og:title',
        //       content: 'Bilan de nos actions Poitiers Collectif'
        //     },
        //     {
        //       property: 'og:description',
        //       content: 'L\'équipe Poitiers Collectif a été élue sur la base d\'un programme. Après trois ans, il est temps de faire un premier bilan !'
        //     }
        //   ]
        // }
      },
      {
        path: "/timeline",
        name: "timeline",
        component: Timeline,
        // meta: {
        //   title: 'Un aperçu de nos trois années d\'élus et élues Poitiers Collectif',
        //   metaTags: [
        //     {
        //       name: 'description',
        //       content: 'L\'équipe Poitiers Collectif a été élue sur la base d\'un programme. Après trois ans, il est temps de faire un premier bilan !'
        //     },
        //     {
        //       name: 'og:title',
        //       content: 'Un aperçu de nos trois années d\'élus et élues Poitiers Collectif'
        //     },
        //     {
        //       property: 'og:description',
        //       content: 'L\'équipe Poitiers Collectif a été élue sur la base d\'un programme. Après trois ans, il est temps de faire un premier bilan !'
        //     }
        //   ]
        // }
      }
    ],
    navigationFallback: {
      rewrite: "/index.html",
      exclude: ["/images/*.{png,jpg,gif}", "/css/*"],
    },
  });


  // ... 

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if(nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if(previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    // We use this to track which meta tags we create so we don't interfere with other ones.
    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

// ...
  
  export default router;
  