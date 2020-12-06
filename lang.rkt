#lang at-exp racket

(provide project-card
	 card-row
	 normal-content)

(require website-js)

(define (normal-content . contents)
  (content
    (my-navbar)
    (container class: "p-5"
	       contents)))

(define (my-navbar)
  (navbar
    #:brand (b "Stephen R. Foster")
    #;
    (nav-link 
      "blog.html"
      "Blog")))

(define (card-row . cards)
  ;TODO: Move this grid to a util place.  Can use across many sites
  (row
    (map (curry div class: "p-2 col-xs-12 col-md-6 col-lg-4")
	 cards)))

(define (project-card 
	  #:img [img (picsum 500 500 #:grayscale? #f)]
	  [head "Project name"]
		      [body "Project description"])
  (card (card-header head)
	(card-img-top
	  height: 200
	  src: img)

	(card-body body)))
