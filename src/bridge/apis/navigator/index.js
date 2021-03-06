export function navigateTo(opt) {
  var runtime = require("chameleon-runtime").default;
  let { router, routerConfig } = runtime.getInfo();
  let { path, query } = opt;

  if (path && router) {
    let flag = false;

    let routes = routerConfig.routes;
    for (let i = 0; i < routes.length; i++) {
      let route = routes[i];
      if (path === route.path) {
        flag = true;
        router.push({
          path: route.url,
          query
        })
        break;
      }
    }
    if (!flag) {
      router.push({
        path: router.options.routes[0].path,
        query
      });
    }
  } else {
    router.push({
      path: router.options.routes[0].path,
      query
    });
  }
}

export function redirectTo(opt) {
  var runtime = require("chameleon-runtime").default;
  let { router } = runtime.getInfo();
  let { path, query } = opt;

  router.replace({
    path,
    query
  });
}

export function navigateBack(backPageNum) {
  var runtime = require("chameleon-runtime").default;
  let { router } = runtime.getInfo();
  router.go(backPageNum);
}
