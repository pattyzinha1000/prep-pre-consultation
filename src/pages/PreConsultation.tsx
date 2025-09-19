import { CheckCircle, ArrowDown, Calendar, Users, Target, FileText } from "lucide-react";

const PreConsultation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl-readable md:text-5xl font-bold leading-tight mb-8">
            The 60 Minutes That Could Change Your Next 20 Years
          </h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto border border-white/20">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 mr-3" />
              <span className="text-xl-readable font-semibold">Your Zoom Link:</span>
            </div>
            <p className="text-2xl-readable font-bold mb-4 break-all">
              https://thefitnessdoctor.zoom.us/j/8495443029
            </p>
            <p className="text-large font-medium mb-2">
              (Save this now. Add it to your calendar. Set a reminder.)
            </p>
            <p className="text-large">
              In about 10 minutes, you will receive your confirmation in your email inbox.
            </p>
          </div>
          
          <div className="mt-8 flex justify-center">
            <ArrowDown className="w-8 h-8 animate-bounce" />
          </div>
          <p className="text-xl-readable font-semibold mt-4">Keep reading, because…</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        
        {/* This Isn't Just Some Appointment */}
        <section className="mb-16">
          <div className="bg-emphasis border-l-4 border-accent p-8 rounded-r-lg shadow-soft">
            <h2 className="text-3xl-readable font-bold mb-6 text-primary">
              This Isn't Just Some Appointment
            </h2>
            <div className="space-y-4 text-large leading-relaxed">
              <p>
                Our experts don't just watch you move. <strong>They decode what your body's been trying to tell you.</strong>
              </p>
              <p>
                In 60 minutes, you'll understand more about your body than you have in years. Those mysterious pains, that morning stiffness, the weakness that came from nowhere - <strong>you're about to learn what's really happening.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* What You'll Walk Away With */}
        <section className="mb-16">
          <h2 className="text-3xl-readable font-bold mb-8 text-primary text-center">
            What You'll Walk Away With:
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Your specific compensation patterns identified",
              "Why your body stopped following the rules",
              "3-5 movements designed for YOUR exact structure",
              "Clear next steps (no more guessing)",
              "Your session recording to review later",
              "Your personal blueprint to keep"
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4 bg-success border border-success-border rounded-lg p-4">
                <Target className="w-6 h-6 text-success-foreground mt-1 flex-shrink-0" />
                <span className="text-large font-medium text-success-foreground">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Set Yourself Up for Success */}
        <section className="mb-16">
          <h2 className="text-3xl-readable font-bold mb-8 text-primary text-center">
            Set Yourself Up for Success:
          </h2>
          <div className="bg-card border border-border rounded-lg p-8 shadow-soft">
            <div className="space-y-4">
              {[
                "Clear some space - You'll be moving to show us your patterns",
                "Use a computer or tablet - Phone screens are too small to see what we need",
                "Wear what you'd exercise in - We need to see how you actually move",
                "Find a quiet spot - No distractions when we're solving your puzzle",
                "Don't join from your car - This requires your full participation",
                "Test your tech - Camera and mic working? We need to see and hear you clearly"
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <span className="text-large leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-secondary rounded-lg">
              <p className="text-large font-semibold mb-2">Need help with anything?</p>
              <a 
                href="mailto:michel@thefitnessdoctor.com" 
                className="text-accent hover:underline text-large font-medium"
              >
                Email michel@thefitnessdoctor.com
              </a>
            </div>
          </div>
        </section>

        {/* Can't Make It Section */}
        <section className="mb-16">
          <div className="bg-muted border border-border rounded-lg p-8 shadow-soft">
            <h3 className="text-2xl-readable font-bold mb-4 text-primary">Can't Make It?</h3>
            <p className="text-large leading-relaxed mb-4">
              <a href="mailto:michel@thefitnessdoctor.com" className="text-accent hover:underline font-medium">
                Email michel@thefitnessdoctor.com
              </a> at least 24 hours before. Someone else desperately needs this spot.
            </p>
            <p className="text-large leading-relaxed font-medium">
              But we're betting you'll be there - <strong>you've come too far to stop now.</strong>
            </p>
          </div>
        </section>

        {/* Form Section */}
        <section>
          <div className="bg-primary text-primary-foreground rounded-lg p-8 shadow-emphasis mb-8">
            <div className="flex items-center justify-center mb-6">
              <FileText className="w-8 h-8 mr-3" />
              <h2 className="text-3xl-readable font-bold text-center">
                Before Your Session - Fill This Out Now
              </h2>
            </div>
            <div className="space-y-4 text-large leading-relaxed text-center">
              <p>
                The form below takes 5 minutes. <strong>The more specific you are about your situation, the more specific we can be about your solutions.</strong> Don't hold back - we've seen it all, we've fixed most of it.
              </p>
              <p className="font-medium">
                That symptom you've been worried about? The one you haven't told anyone? <strong>Write it in the form. We likely know what to do about it.</strong>
              </p>
            </div>
          </div>

          {/* Google Form Iframe */}
          <div className="bg-white rounded-lg shadow-emphasis p-4">
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSdxoKpsOMtXss2YxTkVsB3Y9TbSYRGuAbWoEY4cB0N--pj9wQ/viewform?embedded=true" 
              width="100%" 
              height="1915" 
              frameBorder="0" 
              marginHeight={0} 
              marginWidth={0}
              className="rounded-lg"
              title="Pre-consultation form"
            >
              Loading…
            </iframe>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PreConsultation;