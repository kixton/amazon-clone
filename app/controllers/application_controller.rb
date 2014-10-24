class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  after_filter :set_csrf_cookie_for_ng

  # when sending html page, sets authenticity cookie
  # need security ?? 
  # to enable API calls 
  # sending request via 3rd party Angular gem

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  protected

  # when request comes in, check if cookie is value
  def verified_request?
    super || form_authenticity_token == request.headers['X-XSRF-TOKEN']
  end


end
