FROM ruby:2.6.2 as base
RUN apt-get update -qq && apt-get install -y postgresql-client
# RUN apt-get update --qq && apt-get install -y nodejs gives you node 4.8.2.....
# https://nodesource.com/blog/installing-node-js-8-tutorial-linux-via-package-manager/
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install -y nodejs yarn
RUN mkdir /maintainer-seeker
WORKDIR /maintainer-seeker
COPY Gemfile /maintainer-seeker/Gemfile
COPY Gemfile.lock /maintainer-seeker/Gemfile.lock
RUN bundle install
COPY . /maintainer-seeker

# Add a script to be executed every time the container starts.
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]
EXPOSE 3000

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
