#lang at-exp racket

(provide site)

(require website-js
	 (prefix-in html: website))

(define (home-page)
  (list
    (page index.html
	  (content
	    (container class: "p-5"
		       @md{
		       # Stephen R. Foster, Ph.D.

		       This site is under construction.

		       ----
		       }

		       #;
		       (div id: "root")
		       (html:script src: "site/build/static/js/2.32d918a9.chunk.js")
		       (html:script src: "site/build/static/js/3.82612518.chunk.js")
		       (html:script src: "site/build/static/js/main.3b39745a.chunk.js")
		       (html:script src: "site/build/static/js/runtime-main.13cad36d.js")

	    )))))


(define (site)
  (list
    (bootstrap-files)
    (home-page)))

(module+ main
	 (copy-directory/files "./site/build/static"
			       "./out/static")
	 (render #:to "out"
		 (site)))

