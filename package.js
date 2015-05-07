Package.describe({
  git: "https://github.com/alexandersimoes/d3plus_meteor.git",
  name: "simoes:d3plus",
  summary: "A javascript library that extends the popular D3.js to enable fast and beautiful visualizations.",
  version: "1.7.2"
});

Package.on_use(function (api) {
  api.add_files("d3plus/d3plus.full.min.js", "client");
});
