class SensorHistory < ApplicationRecord
  belongs_to :sensor



  class << self

    def to_durations(relation)
      make_durations( get_pairs(relation))
    end

    private

    def get_pairs(sh)
      sh.to_a.drop_while { |x| !x.moisture }.slice_before{|x|x.moisture}.to_a
    end

    def make_durations(pairs)
      pairs.map{|pair| make_duration(pair)}
    end
    

    def make_duration(pair)
      if pair.length ==1 
        {duration:Time.zone.now-pair[0].created_at, created_at: pair[0].created_at}
      else 
        {duration: pair[1].created_at - pair[0].created_at, created_at: pair[0].created_at}
      end
    end
  end

end


# SensorHistory.to_durations(SensorHistory.all)