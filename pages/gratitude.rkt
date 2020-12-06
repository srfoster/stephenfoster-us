#lang at-exp racket

(provide gratitude)

(require website-js
	 stephenfoster-us/lang)

;TODO: Refactor into image manager.  Can we FINALLY generalize this???
(provide images)
(define images (list))

(require racket/runtime-path)
(define-runtime-path images-dir "../images")

(define griswold-image-path (list "images" "bill-griswold.png"))
(define griswold-image
  (page (identity griswold-image-path)
	(build-path images-dir "bill-griswold.png")))

(define lindsey-image-path (list "images" "lindsey-handley.jpg"))
(define lindsey-image
  (page (identity lindsey-image-path)
	(build-path images-dir "lindsey-handley.jpg")))

(set! images (cons griswold-image images))
(set! images (cons lindsey-image images))



(define (gratitude-card 
	  #:img [img #f]
	  name . contents)
  (card (card-header name)
	(when img
	  (card-img-top
	    src: img))
	(card-body
	  contents)))

;TODO: extract into some package for nice web components
(define (show-hide . contents)
  (enclose
    (div
      (button-link on-click: (call 'toggle)
	 "Show more...")
      (div id: (id 'hidden)
	   style: (properties display: "none")
	   (hr)
	   contents)) 
    (script ()
	    (function (toggle)
		      @js{
		        $(@~j{#NAMESPACE_hidden}).fadeToggle()
		      }))))

(define (gratitude)
  (page gratitude.html
	(normal-content
	    ;TODO: Subcategorize
	    @md{
	    #Gratitude

	    These words cannot pay the debts I owe.  They can merely acknowledge the debts I cannot pay.

	    @(card-row
	       (gratitude-card "Lindsey Handley, Ph.D."
			       #:img (prefix/pathify lindsey-image-path)
			       @md{
			       Lindsey, I've been working with you for more than 10 years...

			       @(show-hide @md{
					   I’ve learned more about business (and life) from you than anyone.

					   Here's to another 10 years.  Heck, here's to another 100.
					   })
			       })

	       (gratitude-card "Bill Griswold, Ph.D."
			       #:img (prefix/pathify griswold-image-path)
			       @md{
			       Bill, without you, my Ph.D. work would have been so much more boring...

			       @(show-hide @md{
					   It was with you and Sorin Lerner that [CodeSpells](https://codespells.org) was born.  Thanks for letting me take a risk on such a weird, weird project.  I'm grateful to have the chance to still be working on it now, so many years later.
					   })
			       })


	       (gratitude-card "Grace Manning"
			       @md{
			       Grace, as my first student, you're the one
			       who first showed me what a joy teaching is...
			       @(show-hide @md{
					   Your love of learning inspires me to this day.
					   Good luck with the rest of your Computer Science degree!  
					   
					   I'm glad I got to be there when you were writing your first lines of code. 
					   })})


	       (gratitude-card "Tommy Rodgers"
			       @md{
			       Tommy, I always counted myself lucky to have
			       gone through college with someone so much
			       smarter than me...

			       
			       @(show-hide @md{
					   So many of my pivotal college experiences at Southwestern wouldn't have been the same without you.  

					   * Our ACM competition team
					   * Our "Association for Computer Science Students"
					   * Our Ruby on Rails internship at NITLE
					   * Our late nights and weekends spent designing Open Metagame

					   I wouldn't be half the coder I am today without you.  And thanks for being such a good friend.

					   }) }
			       )
	       
	       (gratitude-card "Adrian Lopez-Mobilia"
			       @md{
			       Adrian, the few times I've had the privilege of 
			       writing code with you have been fantastc...
			       
			       @(show-hide @md{
					   Our early work on Open Metagame and 
					   our later work on CodeSpells were like master
					   classes in game development.

					   Not to mention: You're funny and a pleasure
					   to work with.

					   Thanks for keeping in touch all these years.

					   }) }
			       )

	       (gratitude-card "Jason Rosenstock"
			       @md{
			       Jason, watching you design the early version of
			       CodeSpells from concept art to 3D environments
			       was incredible...
			       
			       @(show-hide @md{
					   To this day, I always make time to practice
					   drawing and digital painting.  I know I'll never
					   be as skilled as you are.  But that's okay.
					   Even the small fraction of skill I've acquired
					   is something I wouldn't have without your 
					   inspiration.
					   }) 
			       }
			       )



	       (gratitude-card "Tennyson Holloway"
			       @md{
			       Almost everything I know about Minecraft,
			       I learned from you...
			       
			       @(show-hide @md{
					   Our early work on the LearnToMod software
					   is still in production.  This was 
					   ThoughtSTEM's first successful software
					   launch.

					   It's been running since 2013!
					   }) 
			       })
	       )
	       
	    ---

	    A list no where near complete...

	    @(card-row
	       (gratitude-card "Jason Le"
			       @md{Coming soon}
			       )
	       (gratitude-card "Sara Luchini"
			       @md{Coming soon}
			       )
	       (gratitude-card "Judith Eisenberg"
			       @md{Coming soon}
			       )



	       (gratitude-card "Jordan Hisamoto"
			       @md{Coming soon}
			       )
	       (gratitude-card "Sonny Najar"
			       @md{Coming soon}
			       )


	       (gratitude-card "Jeron Paraiso"
			       @md{Coming soon}
			       )



	       (gratitude-card "Sarah Guthals"
			       @md{Coming soon})


	       (gratitude-card "Sorin Lerner"
			       @md{Coming soon})



	       (gratitude-card "Whitney Johnson"
			       @md{Coming soon}
			       )

	       (gratitude-card "Bobby Potter"
			       @md{Coming soon}
			       )

	       (gratitude-card "Walt Potter"
			       @md{Coming soon}
			       )
	       (gratitude-card "Rick Denman"
			       @md{Coming soon}
			       )
	       (gratitude-card "Fumiko Futamura"
			       @md{Coming soon}
			       )


	       (gratitude-card "Barbara Owens"
			       @md{Coming soon}
			       )
	       (gratitude-card "Phil Hopkins"
			       @md{Coming soon}
			       )
	       (gratitude-card "Michael Bray"
			       @md{Coming soon}
			       )

	       (gratitude-card "McKenzie Eakin"
			       @md{Coming soon}
			       )

	       (gratitude-card "Rider Barnum"
			       @md{Coming soon}
			       )


	       (gratitude-card "Kie Boyett"
			       @md{Coming soon}
			       )

	       (gratitude-card "Eric Fontaine"
			       @md{Coming soon}
			       )
	       (gratitude-card "Karim Farouki"
			       @md{Coming soon}
			       )
	       (gratitude-card "Kenneth Jeppesen"
			       @md{Coming soon}
			       )
	       (gratitude-card "Kody Black"
			       @md{Coming soon}
			       )

	       (gratitude-card "Tim Wood"
			       @md{Coming soon}
			       )
	       (gratitude-card "Brent Stamey"
			       @md{Coming soon}
			       )

	       (gratitude-card "Kelly Foster"
			       @md{Coming soon}
			       )
	       (gratitude-card "Kirk Foster"
			       @md{Coming soon}
			       )
	       (gratitude-card "Jody Kelly"
			       @md{Coming soon}
			       )
	       )

	       }
	       
	       #;
	       (gratitude-card "Laura Heppell")
	       )
	    ))

