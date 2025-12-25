import React, { useState } from 'react';
import { faqData } from '../mockData';
import { ChevronDown, ChevronUp, Search } from 'lucide-react';

const FAQ = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const filteredFaqs = faqData.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Find answers to common questions about fedv, our servers, and how to get started.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-purple-500/10 border border-purple-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
            />
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-gradient-to-br from-purple-500/10 to-violet-500/10 backdrop-blur-sm border border-purple-500/30 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-purple-500/5 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0 text-purple-400">
                    {expandedFaq === faq.id ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                {expandedFaq === faq.id && (
                  <div className="px-6 pb-6 border-t border-purple-500/20">
                    <p className="text-gray-400 leading-relaxed pt-4">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No questions found matching your search.</p>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-gradient-to-br from-purple-500/10 to-violet-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Still have questions?</h2>
          <p className="text-gray-400 mb-6">
            Can't find what you're looking for? Our community team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-500 hover:from-purple-600 hover:to-violet-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-purple-500/30">
              Visit Forum
            </button>
            <button className="px-8 py-3 bg-purple-500/20 hover:bg-purple-500/30 border border-purple-500/50 text-purple-400 font-semibold rounded-lg transition-all duration-300 hover:scale-105">
              Join Discord
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="#"
            className="p-6 bg-purple-500/5 border border-purple-500/20 rounded-xl hover:bg-purple-500/10 hover:border-purple-500/40 transition-all duration-300 text-center group"
          >
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">📚</span>
            </div>
            <h3 className="text-white font-semibold mb-2 group-hover:text-purple-400 transition-colors">Documentation</h3>
            <p className="text-gray-400 text-sm">Browse our comprehensive guides</p>
          </a>

          <a
            href="#"
            className="p-6 bg-purple-500/5 border border-purple-500/20 rounded-xl hover:bg-purple-500/10 hover:border-purple-500/40 transition-all duration-300 text-center group"
          >
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-white font-semibold mb-2 group-hover:text-purple-400 transition-colors">Community</h3>
            <p className="text-gray-400 text-sm">Connect with other players</p>
          </a>

          <a
            href="#"
            className="p-6 bg-purple-500/5 border border-purple-500/20 rounded-xl hover:bg-purple-500/10 hover:border-purple-500/40 transition-all duration-300 text-center group"
          >
            <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <span className="text-2xl">🛠️</span>
            </div>
            <h3 className="text-white font-semibold mb-2 group-hover:text-purple-400 transition-colors">Support</h3>
            <p className="text-gray-400 text-sm">Get technical assistance</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQ;