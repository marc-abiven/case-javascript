fn init x:etc
 process.setMaxListeners 10

 let events require "events"
 let emitter new events.EventEmitter

 fornum 11
  fn on_test x:etc
  end

  let on_test on on_test

  emitter.on "test" on
 end
end