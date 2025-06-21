"use client"

import { Button } from "@/components/ui/button"
import { Zap, Diamond, Clock, DollarSign, PieChart, BarChart3 } from "lucide-react"
import { motion } from "framer-motion"

export default function KnosferLanding() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-6 backdrop-blur-sm bg-black/80 border-b border-green-500/20 sticky top-0 z-50">
        <div className="text-xl font-bold">
          Knosfer<span className="text-sm align-super text-green-400">®</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300">
            Company
          </a>
          <a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300">
            Projects
          </a>
          <a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300">
            Service
          </a>
          <a href="#" className="text-gray-400 hover:text-green-400 transition-all duration-300">
            Resource
          </a>
        </div>
        <Button className="bg-gradient-to-r from-green-600 to-green-500 text-white border-0 hover:from-green-700 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-green-500/25">
          Get in touch
        </Button>
      </nav>

      {/* Hero Section */}
      <div
        className="flex flex-col items-center justify-center text-center py-32 px-4 min-h-screen relative overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,100,0,0.15) 0%, rgba(0,0,0,1) 70%), linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,50,0,0.3) 100%)",
        }}
      >
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-green-500/10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"></div>

        <motion.div
          className="relative z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-light mb-6 max-w-4xl mx-auto leading-tight tracking-tight"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: "300",
            }}
            variants={fadeIn}
          >
            Crafting{" "}
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 italic font-normal"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              Powerful
            </span>{" "}
            learning
            <br />
            for over a decade
          </motion.h1>
          <motion.p
            className="text-gray-400 text-lg mb-10 max-w-2xl"
            style={{
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontWeight: "400",
            }}
            variants={fadeIn}
          >
            Expert LMS provider specializing in Corporate Training
          </motion.p>
          <motion.div variants={fadeIn}>
            <Button className="bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 rounded-lg px-8 py-6 text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
              Get in touch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Who We Are Section */}
      <div className="container mx-auto px-6 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-transparent"></div>

        {/* Who we are indicator */}
        <div className="flex items-center mb-8 relative z-10">
          <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-3"></div>
          <span className="text-gray-400 text-sm">Who we are</span>
        </div>

        {/* Main heading and stats */}
        <div className="flex flex-col md:flex-row justify-between mb-16 relative z-10">
          <motion.h2
            className="text-4xl md:text-5xl font-light mb-8 md:mb-0 max-w-lg leading-tight"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            High-quality learning
            <br />
            that transforms your team
          </motion.h2>
          <div className="flex space-x-16">
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-light bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                500+
              </div>
              <div className="text-gray-400 text-sm">Team members</div>
            </motion.div>
            <motion.div
              className="text-center"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-light bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                1M+
              </div>
              <div className="text-gray-400 text-sm">Learners worldwide</div>
            </motion.div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 relative z-10">
          <motion.div
            className="p-6 rounded-xl bg-gradient-to-br from-green-900/20 to-black border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-green-500/10"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium mb-8 text-green-400">Corporate Training</h3>
            <ul className="text-gray-500 text-sm space-y-2">
              <li className="hover:text-green-400 transition-colors">/ Assessment</li>
              <li className="hover:text-green-400 transition-colors">/ Curriculum</li>
              <li className="hover:text-green-400 transition-colors">/ Delivery</li>
              <li className="hover:text-green-400 transition-colors">/ Analytics</li>
            </ul>
          </motion.div>
          <motion.div
            className="p-6 rounded-xl bg-gradient-to-br from-green-900/20 to-black border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-green-500/10"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium mb-8 text-green-400">Learning Platform</h3>
            <ul className="text-gray-500 text-sm space-y-2">
              <li className="hover:text-green-400 transition-colors">/ Research</li>
              <li className="hover:text-green-400 transition-colors">/ Wireframe</li>
              <li className="hover:text-green-400 transition-colors">/ Design</li>
              <li className="hover:text-green-400 transition-colors">/ Test</li>
            </ul>
          </motion.div>
          <motion.div
            className="p-6 rounded-xl bg-gradient-to-br from-green-900/20 to-black border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-green-500/10"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium mb-8 text-green-400">Mobile Learning</h3>
            <ul className="text-gray-500 text-sm space-y-2">
              <li className="hover:text-green-400 transition-colors">/ Research</li>
              <li className="hover:text-green-400 transition-colors">/ Wireframe</li>
              <li className="hover:text-green-400 transition-colors">/ Design</li>
              <li className="hover:text-green-400 transition-colors">/ Test</li>
            </ul>
          </motion.div>
          <motion.div
            className="p-6 rounded-xl bg-gradient-to-br from-green-900/20 to-black border border-green-500/20 hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-green-500/10"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-medium mb-8 text-green-400">Analytics Tools</h3>
            <ul className="text-gray-500 text-sm space-y-2">
              <li className="hover:text-green-400 transition-colors">/ Research</li>
              <li className="hover:text-green-400 transition-colors">/ Wireframe</li>
              <li className="hover:text-green-400 transition-colors">/ Design</li>
              <li className="hover:text-green-400 transition-colors">/ Test</li>
            </ul>
          </motion.div>
        </div>

        {/* Get in touch button */}
        <div className="flex justify-center mb-24 relative z-10">
          <Button className="bg-gradient-to-r from-green-600 to-green-500 text-white hover:from-green-700 hover:to-green-600 rounded-lg px-8 py-6 shadow-xl hover:shadow-green-500/25 transition-all duration-300 transform hover:scale-105">
            Get in touch
          </Button>
        </div>

        {/* Bottom section */}
        <div className="relative z-10">
          <div className="flex items-center mb-8">
            <div className="w-2 h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full mr-3"></div>
            <span className="text-gray-400 text-sm">Who we are</span>
          </div>
          <motion.p
            className="text-2xl font-light leading-relaxed max-w-4xl"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            We view our clients as collaborative partners. This approach allows us to tackle a diverse array of learning
            challenges together. We seamlessly bring our ideas and concepts to life, offering a comprehensive range of
            services that drive educational excellence.
          </motion.p>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="py-24 px-6 bg-gradient-to-br from-green-900/10 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-full text-sm mb-6 shadow-lg">
              Our Process
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Our Simple, Smart,
              <br />
              and Scalable Process
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We design, develop, and implement learning solutions that help you work smarter, not harder
            </p>
          </motion.div>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Step 1 */}
            <motion.div
              className="rounded-xl p-8 bg-gradient-to-br from-green-900/30 to-black border border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl hover:shadow-green-500/20"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-green-400 text-sm mb-4 font-medium">Step 1</div>
              <h3 className="text-2xl font-medium mb-4">Smart Analysis</h3>
              <p className="text-gray-400 mb-8">
                We assess your learning needs and identify solutions to streamline workflows and improve efficiency.
              </p>
              <div className="bg-gradient-to-br from-black to-green-900/20 rounded-lg p-6 border border-green-500/20">
                <div className="text-green-400 text-sm mb-4">Analyzing current learning workflow...</div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                    <span className="text-sm">Content audit</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                    <span className="text-sm">Learning gaps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
                    <span className="text-sm">Engagement metrics</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                    <span className="text-sm text-gray-500">Manual processes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-gray-600 rounded-full"></div>
                    <span className="text-sm text-gray-500">Repetitive tasks</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              className="rounded-xl p-8 bg-gradient-to-br from-green-900/30 to-black border border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl hover:shadow-green-500/20"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-green-400 text-sm mb-4 font-medium">Step 2</div>
              <h3 className="text-2xl font-medium mb-4">LMS Development</h3>
              <p className="text-gray-400 mb-8">
                We develop and deliver custom learning content tailored to the specific needs of your organization.
              </p>
              <div className="bg-gradient-to-br from-black to-green-900/20 rounded-lg p-6 border border-green-500/20">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="font-mono text-sm">
                  <div className="text-green-400">def check_trigger(self, value):</div>
                  <div className="text-gray-400 ml-4">if value {">"} self.threshold:</div>
                  <div className="text-gray-400 ml-8">self.status = "active"</div>
                  <div className="text-gray-400 ml-8">return "Learning Triggered!"</div>
                  <div className="text-gray-400 ml-4">else:</div>
                  <div className="text-gray-400 ml-8">return "No action taken."</div>
                </div>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              className="rounded-xl p-8 bg-gradient-to-br from-green-900/30 to-black border border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl hover:shadow-green-500/20"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-green-400 text-sm mb-4 font-medium">Step 3</div>
              <h3 className="text-2xl font-medium mb-4">Seamless Integration</h3>
              <p className="text-gray-400 mb-8">
                We integrate with your existing tools and platforms for a smooth and uninterrupted user experience.
              </p>
              <div className="bg-gradient-to-br from-black to-green-900/20 rounded-lg p-6 border border-green-500/20">
                <div className="flex items-center text-green-400">
                  <Zap className="w-5 h-5 mr-3" />
                  <span>API Integration</span>
                </div>
              </div>
            </motion.div>

            {/* Step 4 */}
            <motion.div
              className="rounded-xl p-8 bg-gradient-to-br from-green-900/30 to-black border border-green-500/30 hover:border-green-500/50 transition-all duration-300 hover:transform hover:scale-105 shadow-xl hover:shadow-green-500/20"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="text-green-400 text-sm mb-4 font-medium">Step 4</div>
              <h3 className="text-2xl font-medium mb-4">Continuous Optimization</h3>
              <p className="text-gray-400 mb-8">
                We analyze performance data to make ongoing improvements and ensure maximum impact.
              </p>
              <div className="bg-gradient-to-br from-black to-green-900/20 rounded-lg p-6 border border-green-500/20">
                <div className="flex items-center text-green-400">
                  <BarChart3 className="w-5 h-5 mr-3" />
                  <span>Performance Analytics</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-green-500/5 via-transparent to-green-500/10"></div>
        <div className="container mx-auto relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-full text-sm mb-6 shadow-lg">
              Benefits
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              The Key Benefits of LMS
              <br />
              for Your Business Growth
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Discover how learning management systems enhance efficiency, reduce costs, and drive business growth with
              smarter, faster processes.
            </p>
          </motion.div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Benefit 1 */}
            <motion.div
              className="border border-green-500/20 rounded-xl p-8 bg-gradient-to-br from-green-900/20 to-black hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-green-500/20"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Zap className="w-8 h-8 text-green-400 mb-6" />
              <h3 className="text-xl font-medium mb-4">Increased Productivity</h3>
              <p className="text-gray-400">
                Gain actionable insights with learning-driven analytics to improve decision-making and strategy.
              </p>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div
              className="border border-green-500/20 rounded-xl p-8 bg-gradient-to-br from-green-900/20 to-black hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-green-500/20"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Diamond className="w-8 h-8 text-green-400 mb-6" />
              <h3 className="text-xl font-medium mb-4">Better Learning Experience</h3>
              <p className="text-gray-400">
                Personalized learning paths improve engagement, knowledge retention, and overall satisfaction.
              </p>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div
              className="border border-green-500/20 rounded-xl p-8 bg-gradient-to-br from-green-900/20 to-black hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-green-500/20"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Clock className="w-8 h-8 text-green-400 mb-6" />
              <h3 className="text-xl font-medium mb-4">24/7 Availability</h3>
              <p className="text-gray-400">
                Learning platforms operate around the clock, ensuring seamless access and progress without downtime.
              </p>
            </motion.div>

            {/* Benefit 4 */}
            <motion.div
              className="border border-green-500/20 rounded-xl p-8 bg-gradient-to-br from-green-900/20 to-black hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-green-500/20"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <DollarSign className="w-8 h-8 text-green-400 mb-6" />
              <h3 className="text-xl font-medium mb-4">Cost Reduction</h3>
              <p className="text-gray-400">
                Streamline training processes and reduce operational overhead, leading to significant cost savings
                for better profitability.
              </p>
            </motion.div>

            {/* Benefit 5 */}
            <motion.div
              className="border border-green-500/20 rounded-xl p-8 bg-gradient-to-br from-green-900/20 to-black hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-green-500/20"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <PieChart className="w-8 h-8 text-green-400 mb-6" />
              <h3 className="text-xl font-medium mb-4">Data-Driven Insights</h3>
              <p className="text-gray-400">
                Leverage comprehensive analytics to track progress, measure impact, and make informed, data-driven
                accurate business decisions.
              </p>
            </motion.div>

            {/* Benefit 6 */}
            <motion.div
              className="border border-green-500/20 rounded-xl p-8 bg-gradient-to-br from-green-900/20 to-black hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 shadow-lg hover:shadow-green-500/20"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <BarChart3 className="w-8 h-8 text-green-400 mb-6" />
              <h3 className="text-xl font-medium mb-4">Scalability & Growth</h3>
              <p className="text-gray-400">
                Our LMS solutions scale with your business, adapting to growing teams and evolving needs without added
                costs.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 px-6 bg-gradient-to-br from-green-900/10 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-500/5 to-transparent"></div>
        <div className="container mx-auto relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-full text-sm mb-6 shadow-lg">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Why Businesses Love
              <br />
              Our LMS Solutions
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              See what our clients are saying about us.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <motion.div
              className="border border-green-500/20 rounded-xl p-8 bg-gradient-to-br from-green-900/20 to-black hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 shadow-xl hover:shadow-green-500/20"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-400 mb-6">
                "Knosfer has transformed our training programs. Our team is more engaged, and we've seen a significant
                improvement in performance."
              </p>
              <div className="flex items-center">
                <img src="/placeholder-user.jpg" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="font-medium">Jane Doe</div>
                  <div className="text-gray-500 text-sm">CEO, TechCorp</div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              className="border border-green-500/20 rounded-xl p-8 bg-gradient-to-br from-green-900/20 to-black hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 shadow-xl hover:shadow-green-500/20"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-400 mb-6">
                "The platform is intuitive and easy to use. Our employees love the mobile learning feature, which allows
                them to learn on the go."
              </p>
              <div className="flex items-center">
                <img src="/placeholder-user.jpg" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="font-medium">John Smith</div>
                  <div className="text-gray-500 text-sm">HR Manager, Innovate Inc.</div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 3 */}
            <motion.div
              className="border border-green-500/20 rounded-xl p-8 bg-gradient-to-br from-green-900/20 to-black hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 shadow-xl hover:shadow-green-500/20"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-400 mb-6">
                "The analytics tools are a game-changer. We can now track our team's progress and make data-driven
                decisions to improve our training."
              </p>
              <div className="flex items-center">
                <img src="/placeholder-user.jpg" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="font-medium">Sarah Lee</div>
                  <div className="text-gray-500 text-sm">L&D Specialist, Future Enterprises</div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 4 */}
            <motion.div
              className="border border-green-500/20 rounded-xl p-8 bg-gradient-to-br from-green-900/20 to-black hover:border-green-500/40 transition-all duration-300 hover:transform hover:scale-105 shadow-xl hover:shadow-green-500/20"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-400 mb-6">
                "The support team is fantastic. They're always available to help with any questions or issues we have,
                ensuring a smooth experience."
              </p>
              <div className="flex items-center">
                <img src="/placeholder-user.jpg" alt="User" className="w-12 h-12 rounded-full mr-4" />
                <div>
                  <div className="font-medium">David Chen</div>
                  <div className="text-gray-500 text-sm">COO, Global Solutions</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 via-transparent to-green-500/10"></div>
        <div className="container mx-auto relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-block bg-gradient-to-r from-green-600 to-green-500 text-white px-6 py-3 rounded-full text-sm mb-6 shadow-lg">
              Frequently Asked Questions
            </div>
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              We've Got the Answers
              <br />
              You're Looking For
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Find answers to common questions about our learning management systems.
            </p>
          </motion.div>

          {/* FAQ List */}
          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <motion.div
              className="border border-green-500/20 rounded-xl overflow-hidden bg-gradient-to-r from-green-900/10 to-black hover:border-green-500/40 transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <button className="w-full flex items-center justify-between p-6 text-left hover:bg-green-500/5 transition-colors">
                <span className="text-lg font-medium">How can LMS help my business?</span>
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </motion.div>

            {/* FAQ Item 2 */}
            <motion.div
              className="border border-green-500/20 rounded-xl overflow-hidden bg-gradient-to-r from-green-900/10 to-black hover:border-green-500/40 transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <button className="w-full flex items-center justify-between p-6 text-left hover:bg-green-500/5 transition-colors">
                <span className="text-lg font-medium">Is a learning management system difficult to integrate?</span>
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </motion.div>

            {/* FAQ Item 3 */}
            <motion.div
              className="border border-green-500/20 rounded-xl overflow-hidden bg-gradient-to-r from-green-900/10 to-black hover:border-green-500/40 transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <button className="w-full flex items-center justify-between p-6 text-left hover:bg-green-500/5 transition-colors">
                <span className="text-lg font-medium">What industries can benefit from an LMS?</span>
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </motion.div>

            {/* FAQ Item 4 */}
            <motion.div
              className="border border-green-500/20 rounded-xl overflow-hidden bg-gradient-to-r from-green-900/10 to-black hover:border-green-500/40 transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <button className="w-full flex items-center justify-between p-6 text-left hover:bg-green-500/5 transition-colors">
                <span className="text-lg font-medium">Do I need technical knowledge to use an LMS?</span>
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </motion.div>

            {/* FAQ Item 5 */}
            <motion.div
              className="border border-green-500/20 rounded-xl overflow-hidden bg-gradient-to-r from-green-900/10 to-black hover:border-green-500/40 transition-all duration-300"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <button className="w-full flex items-center justify-between p-6 text-left hover:bg-green-500/5 transition-colors">
                <span className="text-lg font-medium">What kind of support do you offer?</span>
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 bg-black relative">
        <div className="absolute inset-0 bg-fixed bg-cover bg-center opacity-10" style={{ backgroundImage: "url(/placeholder.jpg)" }}></div>
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-transparent to-green-500/10"></div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6 leading-tight">
              Ready to Transform Your Corporate Training?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Let us help you build a smarter, more engaged workforce.
            </p>
            <Button className="bg-gradient-to-r from-white/90 to-white text-black hover:bg-white rounded-lg px-8 py-6 text-lg shadow-2xl hover:shadow-white/20 transition-all duration-300 transform hover:scale-105">
              Request a Demo
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black border-t border-green-500/20 text-gray-400">
        <motion.div
          className="container mx-auto py-12 px-6"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About */}
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Knosfer</h3>
              <p className="text-sm">
                Crafting powerful learning experiences for over a decade.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Company
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Resource
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:contact@knosfer.com" className="hover:text-green-400 transition-colors">
                    contact@knosfer.com
                  </a>
                </li>
                <li>
                  <a href="tel:+1234567890" className="hover:text-green-400 transition-colors">
                    +1 (234) 567-890
                  </a>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="text-lg font-medium text-white mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-green-400 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:text-green-400 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-green-400 transition-colors">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.477 2 12.019c0 4.438 2.865 8.225 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12.019C22 6.477 17.523 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-green-500/20 pt-8 text-sm text-center">
            <p>&copy; {new Date().getFullYear()} Knosfer. All rights reserved.</p>
          </div>
        </motion.div>
      </footer>
    </div>
  )
}
