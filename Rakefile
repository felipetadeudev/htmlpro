task :dev do
     # Inicia o servidor Jekyll em um terminal
  jekyll_serve_pid = spawn('bundle exec jekyll serve --livereload')

  # Aguarda um breve momento antes de iniciar o segundo comando
  sleep 5

  # Inicia o processo do Tailwind CSS em um novo terminal
  tailwind_pid = spawn('./tailwindcss -i ./assets/css/tailwind.css -o ./assets/css/main.css --watch')

  # Espera que ambos os processos terminem
  Process.wait(jekyll_serve_pid)
  Process.wait(tailwind_pid)
  end

  # Rakefile

task :build do
   if ENV['JEKYLL_ENV'] == 'production'
     # Executa o Jekyll com a flag --minify para ambiente de produção
     sh './tailwindcss -i ./assets/css/tailwind.css -o ./assets/css/main.css --minify'
     sh 'bundle exec jekyll build'
   end
 end
 