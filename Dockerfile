FROM mcr.microsoft.com/playwright:v1.16.2-focal

# copy project (including tests)
COPY . /var/app

WORKDIR /var/app

# Install dependencies
RUN npm install
# Install browsers
RUN npx playwright install

# Run playwright test
CMD [ "npx", "playwright", "test", "--reporter=list" ]