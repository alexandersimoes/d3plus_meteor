Package.describe({
  git: 'https://github.com/alexandersimoes/d3plus.git',
  summary: 'A javascript library that extends the popular D3.js to enable fast and beautiful visualizations.'
});

Package.on_use(function (api) {
  api.use('d3js:d3', 'client');
  api.add_files('d3plus/d3plus.js', 'client');
});
