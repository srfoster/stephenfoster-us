#lang at-exp racket

(provide site)

(require website-js
	 (prefix-in html: website))

(define (home-page)
  (list
    (page index.html
	  (content
	    (container class: "p-5"
		       (link 'rel: "stylesheet" href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" )
		       (link 'rel: "stylesheet" href: "https://fonts.googleapis.com/icon?family=Material+Icons" )

		       @md{
		       # Stephen R. Foster

		       This site is under construction...

		       ----
		       }

		       (div id: "root")
		       (thunk*
			 (define files
			   (directory-list "./site/build/static/js")) 

			 (define (ends-with? f s)
			   (string-suffix? (~a f) s))
			 (define (is-js? f)
			   (ends-with? f ".js"))
			 (define js-files
			   (filter is-js? files)) 
			 (map
			   (lambda (f)
			     (html:script src:
					  (~a "/static/js/" f))) 
			   js-files)) )))))


(define (site)
  (list
    (bootstrap-files)
    (home-page)))

(module+ main
	 (system "cd site && npm run build")
	 (delete-directory/files "./out/static"
				 #:must-exist? #f)
	 (system "cp -r site/build/* out/")
	 (render #:to "out"
		 (site)))

