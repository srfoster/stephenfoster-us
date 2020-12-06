#lang at-exp racket

(provide site static-site)

(require website-js
	 "./lang.rkt"
	 "./pages/gratitude.rkt"
	 "./pages/blog.rkt")

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

		       ; Is this ## header bug from my code or part of markdown?
		       @md{
		       ## My current projects

		       }

		       (card-row
			 (project-card
			   #:img
			   "https://picsum.photos/id/1035/340/200"
			    "Gratitude"
			    @md{
			    My ongoing attempt to thank the millions of people who have helped me in life. 

			    @(link-to (gratitude) "Read more")})
			 (project-card
			   #:img
			   "https://codespells.org/images/three-wizards.png" 
			   "CodeSpells"
			   @md{
			   A game where you code your own magic spells. 

			   [Read More](https://codespells.org) }
			   )

			 (project-card
			   #:img "https://www.thoughtstem.com/img/stock-photos/1.jpg"
			   "ThoughtSTEM"
			   @md{
			   Since COVID-19, my company has pivoted back to its roots:
			   Making ed tech, like [CodeSpells](https://codespells.org)
			   and [LearnToMod](https://learntomod.com).

			   [Read More](https://thoughtstem.com) }
			   )

			 (project-card
			   #:img "https://picsum.photos/id/104/340/200"
			   "Blog"
			   @md{
			   I don't blog much, but when I do, I do it here.

			   [Read More](/blog.html) }
			   ))



		       )

	    #|

	    ;LearnToMod
	    ;Minecraft TED Talk
	    ;Don't Teach Coding
	    ;The Planes -> 2d Racket tech

	    ;Vox-L


	    ;NSF Grants


	    ;NSF GRFP

	    ;Metapolis

	    ;Prezi

	    ;Meta engine

	    ;Metacoders business model

	    ;Website js, enclosurse

	    @md{
	    ## Projects

	    @(card-row
	       (project-card
		 "CodeSpells")

	       (project-card
		 "ThoughtSTEM")

	       (project-card
		 "Blog")

	       (project-card
		 "Gratitude"))
	    }

	    @md{
	    ## Past Projects

	    @(card-row
	       (project-card
		 "MetaCoders"
		 @md{
		 Sub-projects:

		 * a
		 * b
		 * c
		 })

	       (project-card
		 "2D Games"
		 @md{
		 Sub-projects:

		 * a
		 * b
		 * c
		 })

	       (project-card
		 "Website Tech"
		 @md{
		 Sub-projects:

		 * a
		 * b
		 * c
		 })

	       (project-card
		 "Ph.D. Research"
		 @md{

		 I did several projects during my Ph.D. days at UCSD. If you need some bedtime reading, here are the links to some of the research papers:

		 An old prototype of CodeSpells (but the new one is way better).
		 An IDE that can read your mind and refactor your code before you know you want to.
		 A programming language that looks and feels like a Mario-style platformer.
		 I wrote my thesis on paradigms for integrating coding into games. I now run a company that does exactly that. Weird coincidence.
		 }))


	    }
	    |#
	    ))))

(define (static-site)
  (list
    (bootstrap-files)))


(define (site)
  (list
    (bootstrap-files)
    (home-page)
    (gratitude)
    (blog)
    images))

(module+ main
	 (render #:to "out"
		 (site)))

