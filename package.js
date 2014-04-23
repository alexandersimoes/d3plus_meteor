Package.describe({
  summary: 'A javascript library that extends the popular D3.js to enable fast and beautiful visualizations.'
});

Package.on_use(function (api) {
  api.use('d3', 'client');

  api.add_files('d3plus/d3plus.js', 'client');
  api.add_files('d3plus/d3plus.css', 'client');
});