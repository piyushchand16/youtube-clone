import React from 'react'
import "./SearchPage.css"
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './ChannelRow';
import Videorow from './Videorow';

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className="searchPage__filter">
            <TuneIcon />
            <h2>FILTER</h2>
        </div>
        <hr />

        <ChannelRow image="https://d31ezp3r8jwmks.cloudfront.net/rrggk40pbkppfi0tas3j73qr4lub"
        channel="Clever Programmer"
        verified
        subs="658k"
        noOfVideos={382}
        description="You can find awesome programming lessons here! Also 
        expect programming tips and tricks thatwill take your coding skills to the next level"/>
        <hr />
        <Videorow 
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour training...Check this out...."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone With React JS for Beginners"
        image="https://d31ezp3r8jwmks.cloudfront.net/pimikonx0o5gfx4l0wwtsoyf171m"
        />
        <Videorow 
        views="5.8M"
        subs="659K"
        description="Do you want a FREE one hour training...Check this out...."
        timestamp="3 days ago"
        channel="Clever Programmer"
        title="A Full Python Course Beginners to Advanced"
        image="data:image/jpeg;base64,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"
        />
        <Videorow 
        views="3M"
        subs="659K"
        description="Do you want a FREE one hour training...Check this out...."
        timestamp="4 weeks ago"
        channel="Clever Programmer"
        title="How to Become a Programmer"
        image="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRUYGBgYGBwYGBgcGBgYGBkYGRgaGRkaHBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHzQsJSs2NDQ0NDQ0NDQ0NDQ0NDQ0MTQ0MTQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xAA/EAACAQIEAwYEAwYFAwUAAAABAgADEQQSITEFQVEGIjJhcZFCgaGxE1LBBxQjgtHhQ2JykvEVM/AWJDRTov/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACoRAAMAAQQBAwQBBQEAAAAAAAABAhEDEiExUQQTQSIykaFxQlKB8PEU/9oADAMBAAIRAxEAPwDPncTuK8PzH3nCYsQe4YigpJKsgpNoPSELAB6iAcV4slEW3c7L+p6CHVKgRSzGwAuTMBxDFZ6jv1OnoNBAGdxmMeo2Z2J6dB6CDoLxZf8Amc8JgSSBIitgf/OclA0vI2Qm5gB18U7KqEkqugF9IxGjAskWnz3EANHwTF6AEaj622mpwxN7tuRoOg6Tz+nUKWPzm04PxNKqiwsw0IP9YFJlugkoEhQEHqPqJPAYp0RRQA7FaKNZwNyB84AOijRUHUe86GHWAHYop2MRyKdigByKdnIAKK0UUAOWjSI+cgBGRGmSERpgAy0UdFADJx1U9w+kaJzEHuHz0iAKwx7o9IWkGoiwEKSAGf7VYsgLTHPvE+Q2EzSCWXaCoWrvf4bKPQC/6ytttATHki0hca3hKYcuYfQ4UOd4nSRUxVdFXSe28mR7X5g8vLpLj/oakaXEFqcHddNxyiWpLKejS+CvA5iS5Li4+cnPDXGwsPPSTpw1zyA+ZhunyT7deCrZztYfX+sv+yBAdixAAHM9T/aBYrhjKLjWVyA7c400+gcuXyeqLXX8w95IrjqJ5V3x+b6zn7zUHxuPmYxZPWQ0HxVSw0nmC8Sqj/Ef3MeeK1v/ALGjFuN/+9N1mZ7S12Lqbkd3lKYcXrD4z9Jx+K1G0Yg+oiBskXEPydvcyVMa6277HyuZXfiThqRiNp2TxrO5BYnu63N+ek1l55dwjjDUGLKoNxbeXS9tG50x7wGmbe8V5jl7bDnSPuJKvbROdN/pAeUayKZhe2dHmjj5CSL2ww/POP5YBk0cUoV7WYY/GR/KZIvabDH/ABAPW8AyXU5Kte0GGP8Air7yReMUDtVT/cIAHGNMGHEKZ2qJ/uEeMSh2dfcQAlikf4q/mHuIoAZkCMqasq+dz8pKBIqGrM3yEQBySR3yqT0F5CpixVyjAdIDMRicQXdmO7EmNVb6RhXWGYDDlmAg2Sll4LLhuG7t5dYenOUaAAA6SYMBuROWm2zvhKVgKS0eFB5RlFlPMQnKOUzeUbppkX7su9hGmksnyyIoYZDaDV6I6TL8bw2Rg66dbTWVAZScdp9w+ommm/qMdaE5Zp+zGDFSgjfhU3uupzWa9+dxBuI8CdG7yKA1yACDp0kX7PMSDSdGKizggkai++s19TCIxH8VPQmxHyO06U+TznKxnPPgxVDBUUcHEJdNb5d720hHE+HcONPNQz59LKQbX57iHdqsJkRO8rXPwm8oKB8Pet3x8td5WORCxvCMMCophm7ozZhYh+YGkEfg9L8tvpNzmeynPSIzrqVsZY4+i702tSovceIGzHztb9ZTSTKuXLweYNwSn5+8YeAp+Zp6TU4S2Uf+2TN5MP6RqcPVE/jYRsq3JdCp3N+t9BBpLpiaS6Z5qeALyc+wkbdn+j/SegPg8OagY06wpsuwU909dIS/CcK6H8P8UMNCSrWB31JEMMl5XZ5o3Z9+Tj2kTcAqdVnqDcDwtiTiGW2pDADy5iBY/g9NUL0sSjld1JG3OxEQZPOW4HV6D3kTcIqj4PrPUqfZdnUMmIpt9LfWBY/gFSnl7yPmYLdTopJsL+UAyebNw6qPgP0kbYOoPgb2nqb9lcSBeyHyD/2lfxDhNaiueomVb5b3B1O20AyebtQcfA3+0yMoeh9jN1+Ks4WXy9oBkwpizHrNwUQ8l9hLNOGYZ8MWFMmqH7xA7uW/te0MBk80/Eb8x9zOz0FuEYfkr25dxYoYHkgc2BPlGYVe6PPWLEnuH0klIWA9JJZIs7iGsjf6T9pwRuJB2tcEagb2k1SnsuYddGJUTQ8HpgLmPPaA43AfhMCpDA2sSL2v5bS7wiWUX1NpNUnJWnDVchpwxIOYkWIAAsQTubsDpYW9xIDhhfxW8gBeWqoCiAb2Yn1LkfYLK6tgTc3JsenKRL+DapyiJ0dPCQb9US/uRCcLiKjMvhUnS3wk2sNzoT9+kOo8DRcMa5qgsWyhL94AG17X/SVux12HeYje3kOZ8pbfwRPy18FkMU2S5VTy5iV7cUY2AUaXuToPfaF4vEB17iKi3Oxcki+mbMx1t0tFxvhdWg6ZqfdKhiFzMEBNgGNt73kKUaXbWF1krqnEm5pf/SQfoJHj2D02Ou17EEH2MJWqDlzplzDQHXTyML4jUeoAl+61lCchpqVv4SbXNtzGkt3RLdbc5yjnYDDqtN6hz5s4AAtY+djvLztJw4FTVActpmva1vlB+zAZKZpZAApAZyDof7wnjNf8MAMcytpYE206gzWVyzkpcZb/AMGQrnSdpvZQdNGvbnp+kM4lWpsoyJY3kODp3Kd0NdwMt7X12PQSyOixTjym2egjWYE+dpZJ2jw1/wD45XzUjb5GH8T4UhKZcFqQfCyjW2mxnTwjDkAvhnQ9F29TlMG8jqnTyysqcZw7PcGsiZRpnbxX9YhxekSE/HqhGNmJJPdO+4jk4Dh8zF3dVY9wAG4FtjoYLjOAIud0q3QISpPiLdLW2lf0/Alfw1+i5GIw9sqY1gNhfL+ogWN4w+GNqNdKyvdmut7HQbgzI2ikumxvL7Zpk7ZVR4kpt10IlZxzi37wyt+GqFRY5eZMrJyAsHQ07+K1rZja97XNrjYxs4RAROMfVAsKjgdM7f1ixHEKrjK7sw3sTfUQacgApydigByaTgD2w9U5rd4cr/DzEzkNwnE2Sm9NQCHNyT6QA1+BQ/hpbXujlFGYO/4a6/CPtFDgMvyYvFeA/KTrIMV4DJ0OgkmpIsmw6l2ZumntI1naTlbgdTp1vMdVHV6eu0U+NGbMLWAa3yBhmH5QbiaMtwRa9iPeSYZ5L+0rOKZe4aquQA3zAm/Sxtb53zfSWCAWlJQeWFNV6e2n2k5RspJqlG8rsVly5FF2YgseijZR5k6k+QHWWdTEFUIzNax7uY2PqJRDEBVDtckkXsCbX9I93glz5LOjh+4QeYj2d2uS7XNs2p7zL1HPn7yWli0CZjba976RmFYG7DUMAdLb9fb7CSsoqkmQPgwdTrby1kFcm4y8tNb9D0llUrLbQ28jofYwLMpYAnc621IHMzSO8sy1F9OENHE6lNrI5AyqCLCxNrknqbm3pGY3ilSqArsCAb7Aa/KA1D3j6mcBnSee+zlbaG4DBMVRyoKGoF3sx11HlAax0hNFmRUPeAzhrg6e3WBLNNieOUfxbfxVCkA2c2FrhtL6yxHGMNqExLjNve5t11YTMCjQqk5S5c6kBSb9TDBwTDMTlrFco1BGvnvKc4+TB66ntP8ABd0zTyjJjFI2swUkX26Qfi9d8PTzfiUnuQLBbGx+ZlSnZpW8NdD09PeRN2XrWuCh8s20y9teDResSXYk7QqAAaCEDqdT9I6rxfDOCGoBL8xY/aVuP4VUpAFxodAQbi8BtD20brWbWey/bFYJmX+EVGt9+mm3nA0p4YsgDuAV77EeF/1ErLRWjU4WBO81lovW4ThibLiQPM2kacADGy1kJMpbRRba8lb5+UXFbs1VUEhka2tg2pgmM4LVpoHcAAi++vp6wMOw2Yj0JEmxmcWVnLiwI7xYC48+cEq8idR8L9gUUeVjSJZmNnBzjiI0QA21M2A9B9opg6+KcMe+3LmekUALCqt1I8osM11Ea9ZRuRAqfEUW6766STUuaclRdbygbjHQRi8Ve+4ic5WGOacvKD+0VQd0A684JhHsBIq1Q1bk7gD6XjqXhB5zPaksG2509xc0X2hL18ouTaVOFfaEYmjnsNZk555Omae3gkPElJsNZX/vxz6C3WTU8OU+AHzufqJMmFJ1yA+x/wCZaUk/XRG/EVVe6u4/8sJYcG4krLYWBHKC1cNmFsn029L7QR8KAO5dXU3t1g5TQfVL5NJXqgiA0qneYf5fa/8AxB0xXcBbQ3sfWO4e11Zup+20USxamolyDvufWdBnH3MQnUeeNrHSSN4F3/SRVtpIx7i77/KAFn2YrBKxJfJ3TYkXG40M1AxBQ5lrUXDXWzgA8ze4mZ7JsRWNnRO6fGLg6jTea3G1GCE5cO99L3ym5003hhZyQyRKRKpmoUXDLfRvYbRr4RcrD91db7MjDT6gwTAYTKjFsNvZAUfUEbsNrQyyCwIxKDfu5mGnpeAnKfZDiOG0KhyOtdLAN8RUafMSjq8AoGoFSsVQg6sLEEeoGk0j4gAXGJcNsodALgb8hfScrYp1Rij0qthdRYBtN7m8aB9YRnj2UVlumJQ+R3+8g/8ASFcglShsSLZrHSaTEU3rU8r0qfeUFSj96+41tprF+7lAA+Ge9grlHzae95rKz2sHO7pdPJja3Aq6tlyXPkQbQDEUmRijizKbETbVDhlPdOIQ8rBzc/WUmJwVB3JOIsxN2z6G/S3WOtLwVGt/d+jPTkJ4hQVKjIjZ1U6N10Bg0xNxXjSfOdMYYhjj6xk7GiAFbi375+X2EUHx9T+I3y+wigUGVMGDrmPOCNg2OoOl7Swrm7ZeQNyY5zoR1jmarpFPBXjAuDa4ki4DUC5JOwEs+HYRndEGt9Nb++k3PDeAJTYMBdgPEdfYcoVLnsFyYGlh8mZeYPeHQ9JGHKki2hlggzO7W8TufdjI8XhtJzOvqOpQ9vByidLwrBVCWPSUa4lkOU+8Mw2MtzhUhNpdl8DeA1uJZGtlnafEBr5SF1VsztbawEmZw+TWr4+lhOF4iH0sRCayAKT5adYFgERND7x/FsSoQ676CDy6wgVfTmmA4/EjJptaF9nnvSv5n7zPcSZsi6WG3mZfdmP+yPU/ebzOEcWpW5j33MQican1nZZmRVtpK57i6nfblIq20kd+4oud9rfrAAjg/Ezh3LhFe4IIaXQ7Q4Z+9UwwzbWXLb11trM/gMSEcsyBxYixlzwzC0qxNVqbkA2yLa1v6xtLbld+CFudYwGHjmFyWRatM3GisbWvqbXtD8HxmlkW2LdWJOYOF25DUStxPB8MzrkLoN2Vr3YdFvGvwHDbDE2PQ2Fj0MS5CuOzSpiS9iuJoOF2zAXJ9Q36SVMMxIz0qLhgTcEAg8hqJ5niqOR2TMGym1xsYqeJdfC7L6MR9ox4PQcdgiyELQdHGzIwvfoLGDLiKa9xqmIRyBmDZyR589JkqPGsQpBFZ9NrnN94SvabEZw5ZWYAi5Uag9bekqa2mV6eVwad1RdUxYFreNQb/aUGM4O9R2daiOWObe2+1pLR7YOAc9Km9+eot95HW7QUXNzhlU7llIuT7CbbprswUXPX/QbDdmcQ6llQWDFSCwBuN/lIavAMStyaTadLH2A3hp4jRK3SpWptmBYBmIa572l7XtL/AP6hRbRMe6m2hfLYeXeEhzPRpvpc4MLVwbrujj+UwZ1I3BHrPRaFJ3stPF0n38YBbXoQRKvi3ZrE1ChvSORAl1YgsRubW85jynhnTmWk0Y0xqy3xPZ3EowVqTXOotZgbeY9ZWPTKEqwIZSQQdwRuICyZfibfxW9f0E7I+JP/ABX9f0igUew1eDo4AamoA2sLH3Elp8JoqMopIb73UE+51luqRfhgCPL8l4KWjwGmjo6DKysDuSLHQjXyMu8kpu0zMuHcr/l+Qzi5ltgq4qU0cbMoP01+sdZaywR51+EUd1Pwu49mMI/DuJZdoMHkrFx4agDfzABWH0B+cERdJw3xR36eHKKXHcOB1tKerhWQ3G02RSDVsMp3Ec20Rekq5MkmJYEg845MUSCo/wDLS6r8JU7QVeCNudpsrlmD06XQNUxl8tidBb10j1VnIL7DYdYUcEqC+5Og8usao0nXoaM0tzMdSmuCDilNnRQq+HlLbs2hFKxFiCdPnAwdJ1KhGxImtenn4I3Bz7n1nLQZcQeesISoDtMK03PYZGVtoRTTOqJnAzMBryubXvIa20kz2RNjY3taRgTLjF9kKqC6Oji42NjrIRwXF0rlVYDnlYW9YTwziIqVAppErY3VWtc6a7iXuIxVMAj+OmliDmYfrJaua45XnBU7ms4wZB8ZiVKuxbuHQkaawkdoGNs9NHsb3ta8gx+JqAOhzFCRqykGw232lUIOc8vsr3GumWeO4kj2y0UQi97c7yei2EbxK6d0DcnvczpKadjUpdGerm1hvH8F7VwGFJulewsNDv8AWSN2ZP4TVBWQhQTbrbzmfivKdJpJIiZaeW8jYoooixTl4jGmAYO3kqYp18LuvozD7GQzkQYLOnx/ErqKz6dTm+95XVKjO5ZjdmNyepMaZxDAc4zyZji1HLWcXvZopDj6hao5J1LG87I+o6XWnnjo+hhE84pjmlmYLiqAdWRtmUqfmJnuyGMKl8M+6k5fUGzD9feaopKw8Ep/ifijMrlgxIbmBa1trHnKmlhpia5JuJ4T8RCvxDVT5j+u0yZUjQixGhE3bpKjifCs5zp4+Y/N/ec+rG7lHRo6m3hmctI3STVAVJBFiNxzEYXnOdJDe06z3iqWgeIf4V3Y5R5k6WEcommS47BM608iMxYNewJ2aw9NIbhuyNRh33VL621Y/wBJreFYUpSVTvufnyhijWejOtUypRwVOabM9h+yVBQM2dz5mw9hLKjwiinhpIP5QT7mWNopLun2w2pAv7qn5F/2iQYpKVNTVekHCIbgDXLubDn1hxEbVphkKnYgg/PSCpp5FUqpaZnF4xwmtv3CeoKwocFwNVbUsQumoGYXnmeJ4CwYhWGhI18jA34ZVXYexmvvS+0cj9NS+1np/wD6XUG9OoQeoP8AScqcJxS+GtmA5HyN55nTxuJp+F6i/wAzESww/bXFp/iZvJlB+1poq0n5Rlt9XPTT/R6KeI4xRZ6KONr2sYOvEaAGWtgjps2UEzMYX9o9UeOkjeYJU/WWtD9oeHbx0mX5Bh9Iva030xe9rz90fjkLrPw9wSFdGte1mAv9oLT4RQdbpiFDW8LW9odS7R8Pq7sgv+Zcv3ELXh+Cq6oyH/Swk16Zv7aKj18TxctfyijHZxyLq6HqLyux2Aellz2s4JUg3vbeaxuyqfBUZfQwLFdlqpAGfMF0UHkJHs6i75Nv/XoUuHgysVpcVuztdfgv6QGrgKi+JGHykuGvgubmumBmNMlZCNwYwiLBQyKdtFaIDhnBOmKIDG4k99vU/eKKodT6n7xQKPolY9owRzQNCQTlohEYAR4zFCnTdyLhVLW625RmDxaVlzU2B6jmPURuLo56bofiVl9wbGeX4XHPSe6sVI5iaxpqpfkmqwelY/AJU8Ys3Jhv/eUOI4FUF8hVx65T7HT6y47PcWGJTvEZ18QtbQ7GWbUJheks4ZrOrSXBhhwiuxtky+bEAf3+UueCdnlRg7kO48NvCvmL7nzl+lAeskimEh1qOhNOCJjENhKMxRRTmaADWjztBK+Opp43RdebCdTGo4sjq1tTlYG3tHhhlGC4gtqjj/O33g8L7R1ESuwYgFgGF/PT9ICtVTsQfnJYDyJE+GRt1HtJLxXgPAE/B6R+G3oYLU4AvwuR66y4BnbwyLajN1OAuPCwP0gz8NqrrlPqJd8S4kabBct785ZU3uAeolK2iXCZlaXFcVS8NSqv8zW9jpLTC9usYn+IH/1KD9rS4ZQdwJBU4fTbdB7TRa1L5Ma9Np12l+Azh/7UqyHvUUe+hsSPoQZdU/2nYV7fiUGU31IAI+kxtTgFI7XX0MCq9nD8L+4jWtzlmb9JOMTlL+T09O03Cqw8QU9GGXX5iTrwbAVlBStTuRsG5zx6pwKqu1m9DBXwdVdcrDzH9pXuS+/9/InoUumexv2IRrlH2Ntxr6SmxfZHEKe4ucbDWxJG+k87w/GsTT8Faotv8zfYy5wf7QMahH8UPbbMoP2tHnTZDjXnppltieD108VJx8r/AGlfWQqDcEacwRLbC/tYr3U1aKPY8iV/Qw+r+0fC1UZamHZS1zeysNRtpyi2RXQe5rSuVk8mfeKPcAkkcyfvFMcHWfQw3kjSIyRjtEajwZ0ximOvABp39Z5n2jwwTEVFGgzZh/MA36zXcS7T06blCjsyGxsFA26k+fSY/jWPFaqaiqVuALE31Atf7Tq0JpPLXBnTRYdhauWu6nmh+jLPQLXnlHD8eaD51UMcpWxuNCQdx6TUYftop3pHQcnB/SLW0qdZQTSSNjOL1mOrdtCQctEDzL3+gEo8VxuvU0aowH5V7o+m/wA5M+np98Ddo3+O4pSp6PUVfK9z7DWVOJ7X0l0RHfz8I+uv0mFYxXm8+mldku2aHFdrazaIFQeQzH3P9JTYnHVH1d2b1Jt7bQecsToNT0mqiJ6RLbYxWm17HYYim7n42sPQafe8yuG4XWc2Wm/zUge5nouAwwpoiD4Vt8+c5/UWsYRULnJk+3WADGm+W51X9f6zKsigf9qx8jPRO1NMGhf8rA/p+sxeh5icLbRskmUr4qouwIHnrHUuMOPFYw3F10Ud7XylFXZWPdFoLkT4LxeMLzU/KELxSn+a3rM2tYjS+kKrYLuA8yL28oYFkva9FKgGax6GEoAAANhpM5hUvoG0t12jTXdfC5jHuNPedvM2nFqi72aT0uPDZkI9NYBlF8DO5pW0+L0z8VvXSF08QrbMD84AT5pwmNJjA8AE9JW3UH5QOrwmi3wAemkMLTmeGRYKir2fQ+FmH1gdXs848Lg+uk0WacLQyPajKf8ARqv5R7iKaq8UMhtR6W7bHzjgYopYh4M6DFFEM867VrbEv55D/wDhZTXiino6f2Ixrs4YykbGKKWySW2scIopQDgCdBLjB9m69TXKqjqzD7LeKKZalNLgpFzg+yKKf4jFvJe6Pfc/SXmG4fSp+BFXzA1994opw3qU+2aykEVI1IopmMrePUc+GqL1Q/TWeRLmJsDr6xRQYn2R1kbn94K7WnIohMjzmWv41RstiNVt9IooxIAJI5zn4rDnORRAd/eTOCtrtFFACU1QdAJNSp9J2KA0G4bHMBlBPzljTxPdBtc84ooDQv3wMbC8mUj2iigCO5gdojFFAo5eKKKAH//Z"
        />
        <Videorow 
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour training...Check this out...."
        timestamp="5 months ago"
        channel="Clever Programmer"
        title="Why Coding is So Easy"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST8sSQLI55z8bGoGjxzBayzUKRZCLq_ya5HQ&usqp=CAU"
        />
        <Videorow 
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour training...Check this out...."
        timestamp="1 year ago"
        channel="Clever Programmer"
        title="Her First Time Coding"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2m9bMvsjbwWzEhNaviX7Qw7jcMIABx6Tz3g&usqp=CAU"
        />
        <Videorow 
        views="1.4M"
        subs="659K"
        description="Do you want a FREE one hour training...Check this out...."
        timestamp="59 seconds ago"
        channel="Clever Programmer"
        title="Let's Build a YouTube Clone With React JS for Beginners"
        image="https://d31ezp3r8jwmks.cloudfront.net/pimikonx0o5gfx4l0wwtsoyf171m"
        />

    </div>
  )
}

export default SearchPage