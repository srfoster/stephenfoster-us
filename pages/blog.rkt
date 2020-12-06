#lang at-exp racket

(provide blog)

(require website-js
	 stephenfoster-us/lang)

(define (blog)
  (page blog.html
	(normal-content
	    @md{
	    #Blog

	    No posts yet...
	    })))

