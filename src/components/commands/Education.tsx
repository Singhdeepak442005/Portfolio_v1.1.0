import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>cd education</EduIntro>
      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Master of Computer Applications (MCA)
      </div>
      <div style={{ marginBottom: '10px', color: '#7FDBFF', fontSize: '0.95rem' }}>
        2025 - Present
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        Currently pursuing MCA with specialization in Cyber Security and Digital Forensics.
      </div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        MCA - Cyber Security & Digital Forensics
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        Currently pursuing Master of Computer Applications (MCA) from Parul University, Vadodara, since 2025. My specialization is in Cyber Security and Digital Forensics, focusing on areas such as Vulnerability Assessment and Penetration Testing (VAPT), Network Security, and Digital Forensics through practical labs and real-world security scenarios.
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '30px 0', paddingTop: '30px' }}></div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        Bachelor of Computer Applications - Computer Science (BCA)
      </div>
      <div style={{ marginBottom: '10px', color: '#7FDBFF', fontSize: '0.95rem' }}>
        2022 - 2025
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        Completed BCA in Computer Science with a focus on programming, web technologies, and cybersecurity fundamentals.
      </div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        BCA - Computer Science
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        Completed Bachelor of Computer Applications (BCA) in Computer Science from The Little Flower Polytechnic, Andheri, Mumbai, affiliated with Tilak Maharashtra Vidyapeeth University, Pune, in 2025. Graduated with 7.55 CGPA and an A+ grade without any backlogs. During the program, I developed strong foundational knowledge in programming, web technologies, and cybersecurity concepts.
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '30px 0', paddingTop: '30px' }}></div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        12th (Higher Secondary)
      </div>
      <div style={{ marginBottom: '10px', color: '#7FDBFF', fontSize: '0.95rem' }}>
        2020 - 2022
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        Completed Higher Secondary Education in the Commerce stream.
      </div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        12th Standard - Higher Secondary Education (Commerce)
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        Completed 12th Standard in the Commerce stream from Sahyadri Shikshan Seva Mandal's Sr. College, Mumbai, Maharashtra in 2022 with 47%.
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', margin: '30px 0', paddingTop: '30px' }}></div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        10th (Secondary School)
      </div>
      <div style={{ marginBottom: '10px', color: '#7FDBFF', fontSize: '0.95rem' }}>
        2019 - 2020
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        Completed secondary education and developed an early interest in Cyber Security and Information Technology.
      </div>

      <div style={{ marginBottom: '20px', color: '#00FF88', fontSize: '1.1rem', fontWeight: 'bold' }}>
        10th Standard - Secondary Education
      </div>
      <div style={{ marginBottom: '30px', lineHeight: '1.6', color: '#E9ECEF' }}>
        Completed 10th Standard from High School Shivajinagar, Samastipur, Bihar in 2020 with 53%.
      </div>
    </Wrapper>
  );
};

export default Education;
