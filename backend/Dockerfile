FROM minustime/rails-workspace:latest

WORKDIR /opt/dribble

COPY ./ ${WORKDIR}

RUN bundle install

CMD ["/bin/zsh", "-c", "rails s"]
